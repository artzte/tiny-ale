# frozen_string_literal: true

class ContractSerializer < ApplicationSerializer
  set_type :contract
  attributes :name
  attribute :status do |contract|
    contract.status_name.downcase
  end
  attribute :learning_objectives
  attribute :competencies
  attribute :evaluation_methods
  attribute :instructional_materials
  attribute :location
  attribute :timeslots

  has_many :enrollments

  belongs_to :facilitator, serializer: 'User'
  belongs_to :term
  belongs_to :category

  has_many :assignments
  has_many :credit_assignments
  has_many :meetings

  has_many :ealrs
end
