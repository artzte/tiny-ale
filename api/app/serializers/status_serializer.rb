# frozen_string_literal: true

class StatusSerializer < ApplicationSerializer
  set_type :status

  attributes :month, :created_at, :updated_at

  attributes :fte_hours

  attribute :met_fte_requirements, if: Proc.new { |record| record.statusable_type == 'Enrollment'  }

  attribute :held_periodic_checkins, if: Proc.new { |record| record.statusable_type == 'User'  }

  attribute :academic_status do |record|
    Status::STATUS_NAMES[record.academic_status].downcase
  end

  attribute :attendance_status do |record|
    Status::STATUS_NAMES[record.attendance_status].downcase
  end

  belongs_to :creator
  belongs_to :statusable, polymorphic: true
  has_many :notes
end
