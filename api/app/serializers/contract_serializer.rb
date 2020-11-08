# frozen_string_literal: true

class ContractSerializer < ApplicationSerializer
  include JSONAPI::Serializer
  set_type :contract
  attributes :name
  attribute :status do |contract|
    contract.status_name.downcase
  end
  attributes :learning_objectives, :competencies, :evaluation_methods, :instructional_materials, :location, :timeslots, if: Proc.new { |record, params|
    params and params[:details] == true
  }

  has_many :enrollments

  belongs_to :facilitator, serializer: 'User'
  belongs_to :term
  belongs_to :category

  has_many :assignments
  has_many :credit_assignments
  has_many :meetings

  has_many :learning_requirements
end
