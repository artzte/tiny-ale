# frozen_string_literal: true

# There are two status variables for users.
# privilege: 0 = no rights, 1=student rights, 2=staff rights, 3=admin rights
# status: 0 == no status, 1==active, 2==inactive

require 'digest/sha2'

class User < ApplicationRecord
  before_save :null_inactive_date_if_set_active

  include Statusable
  include UnassignedCredits

  attribute :first_name
  attribute :last_name

  PRIVILEGE_NONE = 0
  PRIVILEGE_STUDENT = 1
  PRIVILEGE_STAFF = 2
  PRIVILEGE_ADMIN = 3

  PRIVILEGE_NAMES = {
    PRIVILEGE_NONE => 'None',
    PRIVILEGE_STUDENT => 'Student',
    PRIVILEGE_STAFF => 'Staff',
    PRIVILEGE_ADMIN => 'Administrator'
  }.freeze

  STATUS_BOGUS = 0
  STATUS_ACTIVE = 1
  STATUS_INACTIVE = 2

  STATUS_NAMES = {
    STATUS_BOGUS => 'Invalid',
    STATUS_ACTIVE => 'Active',
    STATUS_INACTIVE => 'Inactive'
  }.freeze

  #####################################################################################
  #
  # SIS object validations etc.

  has_many :facilitated_contracts, class_name: 'Contract', foreign_key: 'facilitator_id'

  # contracts created under this user's login
  has_many :contracts_created, class_name: 'Contract', foreign_key: 'creator_id'

  # contracts created under this user's login
  has_many :learning_plans_created, class_name: 'LearningPlan', foreign_key: 'creator_id'

  # user enrollments. these are attached to the user through the enrollments
  # table. students are enrolled in classes. they have contracts through the
  # enrollments table.
  has_many :enrollments, class_name: 'Enrollment', foreign_key: 'participant_id'

  # the set of classes the student is enrolled in.
  has_many :contracts, through: :enrollments

  # the turnins for this user
  has_many :turnins, through: :enrollments

  # can be status'ed
  # deprec , :order => 'month DESC'
  has_many :statuses, as: :statusable, dependent: :destroy do
    def make(month, user)
      Status.make(month, proxy_owner, user)
    end

    def current
      find_by_month Date.today.beginning_of_month
    end
  end

  # each year there is a learning plan.
  has_many :learning_plans do
    def current
      find_by_year Setting.current_year
    end
  end

  # there is one graduation plan
  has_one :_graduation_plan, class_name: 'GraduationPlan', foreign_key: 'user_id'

  # has a coordinator
  belongs_to :coordinator, class_name: 'User', foreign_key: 'coordinator_id', optional: true

  # deprec , :order => 'last_name, first_name'
  has_many :coordinatees, class_name: 'User', foreign_key: 'coordinator_id', inverse_of: :coordinator

  validates_presence_of :status, :privilege
  validates_presence_of :date_inactive, if: proc { |user| user.status == User::STATUS_INACTIVE }, message: 'required if status is INACTIVE'
  validates_presence_of :coordinator, if: proc { |user| user.privilege == PRIVILEGE_STUDENT }, message: 'student accounts must have an assigned coordinator.'

  # deprec , :conditions => 'credit_assignments.parent_credit_assignment_id IS NULL'
  has_many :credit_assignments
  has_many :facilitated_credit_assignments, class_name: 'CreditAssignment', foreign_key: :contract_facilitator_id
  has_many :notes, as: :notable

  #########################################################
  # Helper functions for getting lists of enrollments for
  # this user

  def last_name_first
    name = last_name + ', ' + first_name
    name += " (#{nickname})" unless nickname.blank?
    name
  end

  def full_name
    first_name + ' ' + last_name
  end

  def name
    if nickname && !nickname.empty?
      nickname + ' ' + last_name
    else
      first_name + ' ' + last_name
    end
  end

  def last_name_f
    "#{last_name}, #{first_name[0..0]}"
  end

  # Return a hash describing privileges of the specified user
  # on this contract

  def self.privileges(user)
    p = TinyPrivileges.new

    # user must be specified otherwise no privileges
    return p if user.nil?

    p.grant_all if user.admin?

    p
  end

  # returns learning plan FTE or 0 if there is no current learning plan
  def fte
    lp = learning_plans.current
    lp ? lp.weekly_hours : 0
  end

  def privileges(user)
    # if this is being called on an unsaved record, call back
    # to the class privileges.
    return User.privileges(user) if @new_record

    # create a new privileges object with no rights
    p = TinyPrivileges.new

    # user must be specified otherwise no privileges
    return p if user.nil?

    # an admin or the coordinator has full privileges
    return p.grant_all if user.admin?
    return p.grant_all if coordinator_id == user.id

    # a staff member can view
    if user.staff?

      p[:browse] =
        p[:view] =
          p[:create_note] =
            p[:view_note] = true

      return p

    end

    # privileges to grant if this is the logged on user
    if (user.id == id) && (status = STATUS_ACTIVE)

      p[:browse] =
        p[:view] =
          p[:create_note] =
            p[:view_note] =
              p[:change_settings] = true

      return p

    end

    p
  end

  def admin?
    privilege >= PRIVILEGE_ADMIN
  end

  def staff?
    privilege >= PRIVILEGE_STAFF
  end

  def student?
    privilege == PRIVILEGE_STUDENT
  end

  def active?
    status == User::STATUS_ACTIVE
  end

  #########################################################
  # Learning plans

  def learning_plan(year = Setting.current_year)
    learning_plans.find(:first, conditions: "year = #{year}")
  end

  def graduation_plan
    if _graduation_plan
      _graduation_plan
    else
      self._graduation_plan = GraduationPlan.create(user: self)
      save
      _graduation_plan
    end
  end

  #########################################################
  # Coordinatees

  # returns whether this user is a coordinator

  def coor?
    !coordinatees.empty?
  end

  # returns an array of users who are coordinators. If the passed ID matches
  # a coordinator, the array will only include that user.

  def self.coordinators(_id = -1)
    q = <<END
    SELECT users.*, coordinatees.count FROM users
    LEFT JOIN (SELECT coordinatees.coordinator_id, COALESCE(COUNT(coordinatees.id),0) AS count FROM users AS coordinatees GROUP BY coordinatees.coordinator_id) AS coordinatees ON coordinatees.coordinator_id = users.id
    WHERE coordinatees.count IS NOT NULL
    ORDER BY users.last_name, users.first_name
END
    User.find_by_sql(q)
  end

  # returns an array of coordinatees for this year - students assigned to
  # this coordinator who were active during any of this year's months.

  def coordinatees_current(term = nil)
    term ||= Term.coor
    coordinatees.find(:all, conditions: ["(status = #{User::STATUS_ACTIVE}) OR (status = #{User::STATUS_INACTIVE} AND date_active >= ? AND date_inactive <= ?)", term.months.first, term.months.last.end_of_month], include: [:statuses], order: 'last_name, first_name')
  end

  def self.students(term = nil)
    term ||= Term.coor
    User.find(:all, conditions: ["(status = #{User::STATUS_ACTIVE}) OR (status = #{User::STATUS_INACTIVE} AND date_active >= ? AND date_inactive <= ?)", term.months.first, term.months.last.end_of_month], include: [:statuses], order: 'last_name, first_name')
  end

  # Enrollments report shows all enrollments for the current school year
  # :school_year => filter by year
  # :fulfilled => true/false to show / not show fulfilled enrollments

  def enrollments_report(options = {})
    q = []
    params = []

    q << "SELECT contracts.name AS contract_name, CONCAT(facilitator.last_name, ', ', facilitator.first_name) AS facilitator_name, terms.name AS term_name, terms.school_year AS term_school_year, terms.credit_date AS term_credit_date, contracts.term_id, COALESCE(GROUP_CONCAT(CONCAT(credits.course_name,' / ',credit_assignments.credit_hours) ORDER BY credits.course_name SEPARATOR '; '),'None assigned') AS credit_string, contracts.timeslots, enrollments.*, assignments.assignments_count FROM enrollments"
    q << 'INNER JOIN contracts ON enrollments.contract_id = contracts.id'
    q << 'INNER JOIN categories ON contracts.category_id = categories.id'
    q << 'INNER JOIN terms ON contracts.term_id = terms.id'
    if options[:school_year]
      q << 'AND terms.school_year = ?'
      params << options[:school_year]
    end
    q << 'INNER JOIN users AS facilitator ON contracts.facilitator_id = facilitator.id'
    q << 'LEFT JOIN (SELECT COUNT(id) AS assignments_count, contract_id FROM assignments WHERE active = true GROUP BY contract_id) AS assignments ON assignments.contract_id = contracts.id'
    q << 'LEFT JOIN credit_assignments ON credit_assignments.enrollment_id = enrollments.id'
    q << 'LEFT JOIN credits ON credit_assignments.credit_id = credits.id'
    q << "WHERE enrollments.participant_id = #{id}"
    case options[:fulfilled]
    when true
      q << "AND enrollments.completion_status = #{Enrollment::COMPLETION_FULFILLED}"
    when false
      q << "AND enrollments.completion_status != #{Enrollment::COMPLETION_FULFILLED}"
    end
    case options[:canceled]
    when true
      q << "AND enrollments.completion_status = #{Enrollment::COMPLETION_CANCELED}"
    when false
      q << "AND enrollments.completion_status != #{Enrollment::COMPLETION_CANCELED}"
    end
    q << 'GROUP BY enrollments.id'
    q << 'ORDER BY enrollments.completion_status, term_credit_date DESC, term_name, contract_name'

    enrollments = Enrollment.find_by_sql([q.join(' ')] + params)
    enrollments.each do |e|
      e.timeslots = ClassPeriod.timeslot_strings(YAML.load(e[:timeslots]))
    end
    enrollments
  end

  # active enrollments
  def enrollments_active
    enrollments.find(:all, conditions: "finalized_on is null and (completion_status != #{Enrollment::COMPLETION_CANCELED})", include: [{ contract: %i[category facilitator term] }, { credit_assignments: :credit }, { statuses: :notes }], order: 'contracts.name')
  end

  # returns a User object for the phantom unassigned staff member.

  def self.unassigned
    un = find_by_last_name('Unassigned')
    if un.nil?
      un = User.new
      un.login = 'unassigned'
      un.first_name = ''
      un.last_name = 'Unassigned'
      un.privilege = PRIVILEGE_STAFF
      un.status = STATUS_ACTIVE
      un.save
    end
    un
  end

  # whether this is an unassigned user id

  def unassigned?
    id == User.unassigned.id
  end

  # is this user enrolled in a contract?

  def enrolled_in?(contract)
    Enrollment.count(conditions: ['contract_id = ? AND participant_id = ? AND completion_status <> ?', contract.id, id, Enrollment::COMPLETION_CANCELED]) > 0
  end

  # active staff members

  def self.staff_users
    User.find(:all,
              conditions: ['privilege >= ? and status = ?', PRIVILEGE_STAFF, STATUS_ACTIVE],
              order: 'last_name,first_name')
  end

  # Staff users with active contracts

  def self.teachers
    User.find_by_sql("SELECT DISTINCT(users.id), last_name, first_name FROM users
      INNER JOIN contracts ON contracts.facilitator_id = users.id AND contracts.contract_status = #{Contract::STATUS_ACTIVE}
      ORDER BY users.last_name, users.first_name")
  end

  # find student names

  def self.find_student_names_like(s)
    s = s.gsub(/[^\w\- ]/, '')
    name_like = "#{s}%"
    User.find(:all, conditions: ['(last_name LIKE ? or first_name like ? or nickname like ?) and privilege = ?', name_like, name_like, name_like, PRIVILEGE_STUDENT], order: 'last_name,first_name')
  end

  # Gets enrollments for this user

  def query_enrollments(conditions, parameters)
    unless conditions.is_a? Array
      raise ArgumentError, 'conditions must be an array'
    end
    unless parameters.is_a? Array
      raise ArgumentError, 'parameters must be an array'
    end

    conditions << '(enrollments.participant_id = ?)'
    parameters << id

    Enrollment.find(:all,
                    conditions: [conditions.join(' and ')] + parameters,
                    include: [{ contract: :category }],
                    order: 'contracts.name')
  end

  # gets a hash of contract status reports, indexed by enrollment ID, for the given user

  def enrollment_status_reports(options = {})
    default_options = {
      school_year: Setting.current_year
    }

    options = default_options.merge options

    conditions = []
    arguments = []

    # set enrollee ID
    conditions << 'enrollments.participant_id = ?'
    arguments << id

    # set school_year
    conditions << 'terms.school_year = ?'
    arguments << options[:school_year]

    q = []
    q << 'SELECT DISTINCT(statuses.id), statuses.* FROM statuses'
    q << "INNER JOIN enrollments ON statusable_id = enrollments.id AND statusable_type = 'Enrollment'"
    q << 'INNER JOIN contracts ON enrollments.contract_id = contracts.id'
    q << 'INNER JOIN terms ON contracts.term_id = terms.id'
    q << 'WHERE ('
    q << conditions.join(') AND (')
    q << ')'
    q << 'ORDER BY statuses.month'

    Status.find_by_sql([q.join(' ')] + arguments)
  end

  def enrollment_extras
    q = []
    q << '('
    q <<  'SELECT DISTINCT enrollments.id'
    q <<  'FROM enrollments'
    q <<  'INNER JOIN turnins ON enrollments.id = turnins.enrollment_id'
    q <<  'WHERE enrollments.participant_id = IN (?)'
    q << ')'
    q << 'UNION'
    q << '('
    q <<  'SELECT DISTINCT enrollments.id'
    q <<  'FROM enrollments'
    q <<  'INNER JOIN absences ON enrollments.id = absences.enrollment_id'
    q <<  'WHERE enrollments.id IN (?)'
    q << ')'
    find_by_sql([q.join(' '), enrollments, enrollments])
  end

  ###################################################################################
  # CREDITS

  def unfinalized_credits
    credit_assignments.find(:all, conditions: 'credit_assignments.credit_transmittal_batch_id is null', include: %i[credit child_credit_assignments contract_term], order: 'credits.course_name')
  end

  def finalized_credits
    credit_assignments.find(:all, conditions: 'credit_assignments.credit_transmittal_batch_id is not null', include: %i[credit child_credit_assignments contract_term], order: 'credits.course_name')
  end

  #####################################################################################
  # Password and Login validations and constants

  REGEX_EMAIL = /\A.+\@.+\z/i.freeze

  validates_presence_of :email, if: proc { |user| user.staff? && user.active? }
  validates_format_of :email, with: REGEX_EMAIL, if: proc { |user| !user.email.blank? }
  validates_uniqueness_of :email, if: proc { |user| !user.email.blank? }

  validates_format_of :first_name, :last_name, with: /\A['\.\w\- ()]+\z/, message: ': Please enter a first and last name - it can only have letters, numbers, dashes, spaces, and parentheses.'

  # make sure inactive date is killed if the user has been set active
  def null_inactive_date_if_set_active
    self.date_inactive = nil if status == STATUS_ACTIVE
  end
end
