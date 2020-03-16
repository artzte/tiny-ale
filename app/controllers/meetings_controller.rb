# frozen_string_literal: true

class MeetingsController < ApiBaseController
  PERMITTED_INCLUDES = %w[meeting_participants].freeze

  def create
    contract_id = meeting_contract_id

    if contract_id.nil?
      return render json: { message: 'missing contract relation id' }, status: :bad_request
    end

    meeting_date = meeting_date_attribute
    if meeting_date.nil?
      return render json: { message: 'missing meeting date' }, status: :bad_request
    end

    meeting = Meeting.find_by_contract_id_and_meeting_date contract_id, meeting_date
    if meeting
      return render json: { message: 'duplicate entity' }, status: :bad_request
    end

    meeting = Meeting.new meeting_attributes
    meeting.contract = Contract.find(contract_id)
    meeting.save!

    render json: MeetingSerializer.new(meeting)
  end

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == '-1'

    conditions = {}

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    result = Meeting
             .where(conditions)
             .limit(limit)

    count = Meeting.where(conditions).count

    if params[:include]
      included_models = params[:include].split(',').map(&:underscore) & MeetingsController::PERMITTED_INCLUDES
    end

    options = {
      meta: {
        count: count
      },
      include: included_models
    }

    render json: MeetingSerializer.new(result, options), status: :ok
  end

  def show
    meeting = Meeting.find(params[:id])

    if params[:include]
      included_models = params[:include].split(',').map(&:underscore) & MeetingsController::PERMITTED_INCLUDES
    end

    options = {
      include: included_models
    }

    render json: MeetingSerializer.new(meeting, options), status: :ok
  end

  def update_roll
    meeting = Meeting
              .includes(contract: :enrollments)
              .includes(:meeting_participants)
              .find(params[:id])

    updates = []

    meeting.contract.enrollments.each do |enrollment|
      next unless enrollment.enrolled?

      meeting_participant = meeting.meeting_participants.find { |mp| mp.enrollment == enrollment }
      meeting_participant ||= MeetingParticipant.new enrollment: enrollment, meeting: meeting

      meeting_participant.update_attributes! update_roll_attributes
      updates.push meeting_participant
    end

    render json: MeetingParticipantSerializer.new(updates), status: :ok
  end

  private

  def meeting_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:meeting_date)
  end

  def update_roll_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:contact_type, :participation)
  end

  def meeting_date_attribute
    params.dig :data, :attributes, :meeting_date
  end

  def meeting_contract_id
    params.dig :data, :relationships, :contract, :data, :id
  rescue StandardError
    nil
  end
end
