# frozen_string_literal: true

class GraduationPlanRequirementSerializer < ApplicationSerializer
  set_type :graduation_plan_requirement

  attributes :name, :notes, :position, :requirement_type, :status

  has_many :children, serializer: 'GraduationPlanRequirement'
  belongs_to :parent, serializer: 'GraduationPlanRequirement'
end
