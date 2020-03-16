# frozen_string_literal: true

class CategorySerializer < ApplicationSerializer
  set_type :category

  attributes :name, :sequence, :public, :reporting

  attribute :active_contracts_count do |record, _options|
    record.contracts.where('contract_status = ?', Contract::STATUS_ACTIVE).count
  end

  attribute :homeroom do |record|
    record.homeroom?
  end

  has_many :contracts
end
