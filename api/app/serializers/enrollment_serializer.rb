# frozen_string_literal: true

REPORT_ATTRIBUTES = [
  :contract_name,
  :facilitator_name,
  :term_name,
  :term_school_year,
  :term_credit_date,
  :credit_string,
  :timeslots,
  :assignments_count,
]

class EnrollmentSerializer < ApplicationSerializer
  set_type :enrollment

  attributes :finalized_on

  belongs_to :contract
  belongs_to :participant

  has_many :credit_assignments
  has_many :turnins
  has_many :meeting_participants

  attribute :enrollment_status do |object|
    Enrollment::STATUS_NAMES[object.enrollment_status].downcase
  end

  attribute :completion_status do |object|
    Enrollment::COMPLETION_NAMES[object.completion_status].downcase
  end

  REPORT_ATTRIBUTES.each do |attr|
    attribute attr, if: Proc.new { |record| !record[attr].nil? }
  end
end
