# frozen_string_literal: true

class StaffController < ApiBaseController
  include UserControllerMethods

  protected

  def allowed_fields
    %i[
      firstName
      lastName
      nickname
      coordinatees
      status
      role
      isStaff
    ]
  end

  def get_role_conditions
    { privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN] }
  end
end
