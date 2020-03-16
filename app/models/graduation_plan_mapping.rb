# frozen_string_literal: true

class GraduationPlanMapping < ApplicationRecord
  belongs_to :graduation_plan
  belongs_to :graduation_plan_requirement
  belongs_to :credit_assignment, optional: true

  validates_presence_of :graduation_plan, :graduation_plan_requirement

  alias_attribute :notes, :name

  def before_save
    if credit_assignment
      self.date_completed = credit_assignment.enrollment_finalized_on
    end
  end

  def placeholder?
    false
    # self.credit_assignment && self.credit_assignment.attributes['creditable_type'] == 'GraduationPlan'
  end

  def student
    graduation_plan.user
  end

  def student_id
    graduation_plan.user_id
  end
end
