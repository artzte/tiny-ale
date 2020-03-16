# frozen_string_literal: true

class StudentsController < ApiBaseController
  include UserControllerMethods

  protected

  def allowed_fields
    %i[
      firstName
      lastName
      nickname
      dateActive
      dateInactive
      districtId
      districtGrade
      isActive
      status
      coordinator
      role
    ]
  end

  def get_role_conditions
    { privilege: User::PRIVILEGE_STUDENT }
  end
end
