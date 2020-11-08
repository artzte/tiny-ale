# frozen_string_literal: true

class LearningRequirement < ApplicationRecord
  include StripTagsValidator

  self.table_name = 'ealrs'

  has_many :contracts, through: 'contract_learning_requirements'

  def seq_f
    @seq_f = @seq_f ||= seq.to_f
  end

  def <=>(other)
    self.seq_f <=> other.seq_f
  end

  def self.categories
    ['Arts', 'Civics', 'Communication', 'Economics', 'Geography', 'Health and Fitness', 'History', 'Mathematics', 'Reading', 'Science', 'Technology', 'Writing']
  end
end
