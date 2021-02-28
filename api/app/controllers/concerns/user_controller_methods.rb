# frozen_string_literal: true

module UserControllerMethods
  extend ActiveSupport::Concern

  included do
    unless const_defined?(:ALLOWED_ORDER_COLUMNS)
      ALLOWED_ORDER_COLUMNS = %w[first_name last_name nickname].freeze
      ALLOWED_INCLUDES = %w[coordinator coordinatees].freeze
    end
  end

  def index
    user_params = get_params

    order = (user_params[:order] || '')
            .split(',')
            .map(&:strip)
            .map(&:underscore)

    order &= ALLOWED_ORDER_COLUMNS

    order = order.join(',')

    role_conditions = get_role_conditions

    scope_conditions = get_scope_conditions

    conditions = {}

    additional_conditions = nil

    conditions[:district_grade] = user_params[:grade] if user_params[:grade]

    coordinators_join = nil
    if user_params[:coordinators] == 'true'
      coordinators_join = 'INNER JOIN (SELECT DISTINCT coordinator_id FROM users) AS coordinators ON users.id = coordinators.coordinator_id'
    end

    conditions[:privilege] = case user_params[:role]
      when 'administrator'
        User::PRIVILEGE_ADMIN
      when 'staff'
        [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN]
      when 'student'
        User::PRIVILEGE_STUDENT
      when nil
        nil
      else
        return render json: { message: 'invalid role parameter' }, status: 400
    end
    conditions.delete(:privilege) unless user_params[:privilege]

    conditions[:status] = case user_params[:status]
                          when 'active'
                            User::STATUS_ACTIVE
                          when 'inactive'
                            User::STATUS_INACTIVE
                          when 'reportable'
                          when 'all'
                          when nil
                            nil
                          else
                            return render json: { message: 'invalid status parameter' }, status: 400
    end

    case user_params[:status]
    when nil
      conditions.delete :status
    when 'reportable'
      conditions.delete :status
      term = Term.coor
      additional_conditions = [
        "(status = #{User::STATUS_ACTIVE}) OR ((status = #{User::STATUS_INACTIVE}) AND ((date_inactive >= ?) AND (date_inactive <= ?)))",
        term.months.first,
        term.months.last.end_of_month
      ]
    end

    if user_params[:coordinatorIds]
      conditions[:coordinator_id] = user_params[:coordinatorIds].split(',')
    end

    if user_params[:name]
      name_like = "%#{user_params[:name]}%"
      name_conditions = ['first_name LIKE :name OR last_name LIKE :name OR nickname LIKE :name', { name: name_like }]
    end

    year_conditions = nil
    if user_params[:schoolYear]
      start_month, end_month = Term.reporting_dates_for_year(user_params[:schoolYear])
      year_conditions = ['(date_active <= :start_date) AND (date_inactive IS NULL OR date_inactive >= :end_date)', { start_date: start_month, end_date: end_month.end_of_month }]
    end

    result = User
             .where(conditions)
             .where(role_conditions)
             .where(additional_conditions)
             .where(year_conditions)
             .where(name_conditions)
             .where(scope_conditions)
             .joins(coordinators_join)
             .limit(get_limit)
             .offset(get_offset)
             .order(Arel.sql(order))

    count = User
            .where(conditions)
            .where(role_conditions)
            .where(additional_conditions)
            .where(year_conditions)
            .where(scope_conditions)
            .where(name_conditions)
            .joins(coordinators_join)
            .count

    options = {
      meta: {
        count: count
      },
      fields: get_allowed_fields,
      include: get_includes
    }

    render json: UserSerializer.new(result, options), status: 200
  end

  def show
    result = User
             .where(get_role_conditions)
             .where(
               id: params[:id]
             )
             .includes(get_includes)
             
    raise ActiveRecord::NotFound if result.empty?

    options = {
      fields: get_allowed_fields,
      include: get_includes
    }

    render json: UserSerializer.new(result.first, options)
  end

  protected

  def get_allowed_fields
    { user: allowed_fields }
  end

  def get_includes
    includes = get_params[:include]

    return [] unless includes

    includes.split(',') & ALLOWED_INCLUDES
  end

  # override
  def get_role_conditions
    {}
  end

  # override
  def get_scope_conditions
    {}
  end

  def get_params
    params.permit(:include, :name, :status, :order, :grade, :role, :coordinators, :coordinatorIds, :schoolYear, :scope, :offset, :limit)
  end

  def get_offset
    offset = get_params[:offset]

    offset || 0
  end

  def get_limit
    limit = get_params[:limit]

    limit || @limit
  end
end
