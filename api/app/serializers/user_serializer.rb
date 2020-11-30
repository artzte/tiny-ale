# frozen_string_literal: true

class UserSerializer < ApplicationSerializer
  attributes :first_name
  attributes :last_name
  attributes :nickname
  attributes :date_active
  attributes :date_inactive
  attributes :district_id
  attributes :district_grade
  attributes :email
  attribute :name do |object|
    object.name
  end

  attribute :status do |object|
    case object.status
    when User::STATUS_ACTIVE
      'active'
    when User::STATUS_INACTIVE
      'inactive'
    else
      'inactive'
    end
  end

  attribute :role do |object|
    User::PRIVILEGE_NAMES[object.privilege].downcase
  end

  attribute :is_staff do |object|
    [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN].include? object.privilege
  end

  has_many :coordinatees, if: proc { |record| record.staff? }, serializer: 'User'
  belongs_to :coordinator, if: proc { |record| record.student? }, serializer: 'User'
end
