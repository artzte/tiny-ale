# frozen_string_literal: true

class StudentsController < ApiBaseController
  include UserControllerMethods

  protected

  def allowed_fields
    %i[
      firstName
      lastName
      nickname
      name
      dateActive
      dateInactive
      districtId
      districtGrade
      isActive
      status
      role
    ]
  end

  def get_role_conditions
    { privilege: User::PRIVILEGE_STUDENT }
  end

  def get_scope_conditions
    scope = params.permit(:scope)

    scope_params = /contract:(\d+)/.match(scope.to_s)

    return {} unless scope_params

    current_participant_ids = Enrollment.where(contract_id: scope_params[1]).map(&:participant_id)

    return {} if current_participant_ids.empty?

    return ["id NOT in (?)", current_participant_ids]
  end
end
