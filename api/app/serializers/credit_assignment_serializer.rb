# frozen_string_literal: true

class CreditAssignmentSerializer < ApplicationSerializer
  set_type :credit_assignment

  attributes :credit_hours

  attributes :enrollment_finalized_on,
             :contract_name,
             :contract_facilitator_name,
             :district_finalize_approved_by,
             :district_finalize_approved_on,
             :district_transmitted_on,
             :override_hours,
             :override_by,
             if: proc { |_record, params|
               params && params[:forFulfilled]
             }

  belongs_to :credit
  has_one :graduation_plan_mapping
  has_many :notes

  belongs_to :contract_term, serializer: 'Term'
  belongs_to :contract_facilitator, serializer: 'User'
  belongs_to :contract
  belongs_to :user
  belongs_to :credit_transmittal_batch
  belongs_to :enrollment

  has_many :child_credit_assignments, serializer: 'CreditAssignment'
  belongs_to :parent_credit_assignment, serializer: 'CreditAssignment'
end
