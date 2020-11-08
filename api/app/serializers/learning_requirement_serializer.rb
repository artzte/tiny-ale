# frozen_string_literal: true

class LearningRequirementSerializer < ApplicationSerializer
  set_type :learning_requirement

  attributes :ealr, :seq, :category
end
