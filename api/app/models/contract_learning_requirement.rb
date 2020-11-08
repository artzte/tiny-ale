# frozen_string_literal: true

class ContractLearningRequirement < ApplicationRecord
  self.table_name = 'contract_ealrs'

  belongs_to :contract
  belongs_to :learning_requirement, foreign_key: 'ealr_id'
end
