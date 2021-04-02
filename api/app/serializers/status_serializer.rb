# frozen_string_literal: true

class StatusSerializer < ApplicationSerializer
  set_type :status

  attributes :month, :created_at, :updated_at, :met_fte_requirements, :held_periodic_checkins

  attributes :fte_hours

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
