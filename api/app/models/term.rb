# frozen_string_literal: true

class Term < ApplicationRecord
  include StripTagsValidator

  serialize :months, Array

  has_many :contracts
  # has_many :contracts_active, :class_name => 'Contract', :foreign_key => 'term_id', :conditions => "contracts.contract_status < #{Contract::STATUS_CLOSED}"
  # has_many :contracts_closed, :class_name => 'Contract', :foreign_key => 'term_id', :conditions => "contracts.contract_status = #{Contract::STATUS_CLOSED}"
  has_many :credit_assignments, class_name: 'CreditAssignment', foreign_key: 'contract_term_id'

  validates_length_of :name, in: 5..255
  validates_presence_of :school_year
  validates_presence_of :months

  attr_accessor :base_month
  attr_accessor :end_month

  def school_year_date
    Date.new school_year
  end

  def school_year_date=(date)
    self.school_year = date.year
  end

  def self.month_name(base_month, i)
    Date::MONTHNAMES[(base_month + i) > 12 ? (base_month + i) % 12 : base_month + i]
  end

  # sets months from an array of strings or integers indicating
  # the month number offset
  def set_school_year(year)
    self.school_year = year
  end

  def set_dates(year, m = [])
    months_array = []
    m = m.uniq.sort
    m = m.collect { |i| i.to_i }
    self.school_year = year.to_i
    get_reporting_months

    m.each do |i|
      month = base_month + i
      year = school_year
      if month > 12
        year += 1
        month %= 12
      end

      months_array << Date.new(year, month, 1)
    end
    self.months = months_array
  end

  def reporting_months_options
    month_array = months.sort
    month_array.collect { |m| [m.strftime('%b %Y'), m.to_i] }
  end

  def months_bool
    months_array = []

    get_reporting_months

    (0..11).each do |i|
      month = base_month + i
      if month > 12
        year = school_year + 1
        month = month % 12
      else
        year = school_year
      end
      months_array << months.include?(Date.new(year, month))
    end

    months_array
  end

  # def self.all
  #   find_by_sql "SELECT terms.*, COALESCE(contracts.contract_count,0) AS contract_count FROM terms
  #     LEFT OUTER JOIN (SELECT term_id, COUNT(id) AS contract_count FROM contracts GROUP BY term_id) AS contracts ON contracts.term_id = terms.id
  #     ORDER BY terms.active DESC, terms.school_year DESC, terms.credit_date"
  # end

  def self.active
    find_all_by_active(true, order: 'school_year DESC, credit_date ASC')
  end

  def self.creditable
    find :all, order: 'school_year DESC, credit_date ASC'
  end

  def self.enrollments_report(term_ids)
    q = <<END
      SELECT
        terms.id,
        COALESCE(term_contracts.count,0) AS contractsCount,
        COALESCE(all_enrollments.count,0) AS enrollmentsCount,
        (COALESCE(all_enrollments.count,0)-COALESCE(finalized_enrollments.count,0)) AS enrollmentsOpenCount
      FROM terms
        LEFT OUTER JOIN (
          SELECT contracts.term_id, COUNT(contracts.id) AS count FROM contracts
          WHERE contracts.term_id IN (:term_ids)
          GROUP BY contracts.term_id) AS term_contracts ON term_contracts.term_id = terms.id
        LEFT OUTER JOIN (
          SELECT contracts.term_id, COUNT(enrollments.id) AS count FROM enrollments
          INNER JOIN contracts ON enrollments.contract_id = contracts.id AND contracts.term_id IN (:term_ids)
          WHERE enrollments.enrollment_status = 3
          GROUP BY contracts.term_id) AS finalized_enrollments ON finalized_enrollments.term_id = terms.id
        LEFT OUTER JOIN (
          SELECT contracts.term_id, COUNT(enrollments.id) AS count FROM enrollments
          INNER JOIN contracts ON enrollments.contract_id = contracts.id AND contracts.term_id IN (:term_ids)
          GROUP BY contracts.term_id) AS all_enrollments ON all_enrollments.term_id = terms.id
        WHERE terms.id IN (:term_ids)
END
    Term.find_by_sql([q, term_ids: term_ids])
  end

  def long_name
    name = "#{school_year}: #{self.name}"
    name << ' (inactive)' unless active
    name
  end

  def self.coor(year = nil)
    year ||= Setting.current_year
    coor = Term.new(active: true, name: "COOR #{year}")
    coor.get_reporting_months
    month_count = (12 - coor.base_month) + coor.end_month
    coor.set_dates(year, (0..month_count).to_a)
    coor
  end

  def get_reporting_months
    @@reporting_base_month ||= Setting.reporting_base_month
    @@reporting_end_month ||= Setting.reporting_end_month

    self.base_month ||= @@reporting_base_month
    self.end_month ||= @@reporting_end_month

    months
  end

  def self.reporting_dates_for_year(year)
    coor = self.coor(year)
    months = coor.get_reporting_months
    base_month, *, end_month = months
    [base_month, end_month.end_of_month]
  end
end
