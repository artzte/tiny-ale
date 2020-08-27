# frozen_string_literal: true

class Ealr < ApplicationRecord
  include StripTagsValidator

  has_and_belongs_to_many :contracts, join_table: 'contract_ealrs'

  def seq_f
    @seq_f = @seq_f ||= seq.to_f
  end

  def <=>(other)
    self.seq_f <=> other.seq_f
  end

  def self.ealrs_for_category(category)
    Ealr.find(:all, order: 'seq', conditions: "category = '#{category}'")
  end

  def self.categories
    ['Arts', 'Civics', 'Communication', 'Economics', 'Geography', 'Health and Fitness', 'History', 'Mathematics', 'Reading', 'Science', 'Technology', 'Writing']
  end
end
