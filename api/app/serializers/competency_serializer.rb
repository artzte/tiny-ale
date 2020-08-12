# frozen_string_literal: true

class CompetencySerializer < ApplicationSerializer
  set_type :competency

  attribute :competency do |ealr|
    ealr.ealr
  end

  attributes :seq, :category
end
