# frozen_string_literal: true

class EnrollmentsController < ApiBaseController
  before_action :get_enrollment, only: %i[show destroy update]
  before_action :entitle_enrollment, only: %i[destroy update]
  before_action :entitle_contract, only: %i[create]

  def index
    conditions = {}

    if params[:participantIds]
      conditions[:participant_id] = params[:participantIds].split(',')
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    included_models = get_includes params[:include]

    case params[:status]
    when 'enrolled'
      conditions[:enrollment_status] = Enrollment::STATUS_ENROLLED
    when 'closed'
      conditions[:enrollment_status] = Enrollment::STATUS_CLOSED
    when 'fulfilled'
      conditions[:enrollment_status] = Enrollment::STATUS_FULFILLED
    when 'all'
    when nil
    # skip
    else
      return render json: { message: 'invalid enrollment_status parameter' }, status: 400
    end

    result = Enrollment
             .where(conditions)
             .limit(@limit)
             .joins('LEFT OUTER JOIN users AS participants ON participants.id = enrollments.participant_id')
             .order('participants.last_name, participants.first_name')

    count = Enrollment.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: included_models || []
    }

    render json: EnrollmentSerializer.new(result, options), status: 200
  end

  def show
    included_models = get_includes params[:include]

    options = {
      include: included_models || []
    }

    render json: EnrollmentSerializer.new(@enrollment, options), status: 200
  end

  def create
    if Enrollment.where(contract_id: params[:id], participant_id: enrollment_create_params).count > 0
      raise TinyException, 'Enrollments are already created on this contract'
    end

    contract = Contract.find(params[:id])

    enrollments = enrollment_create_params.map do |participant_id|
      Enrollment.enroll_student contract, User.find(participant_id), @user
    end

    render json: EnrollmentSerializer.new(enrollments, { include: [:participant, :credit_assignments] }), status: 200
  end

  def update
    case params[:command]
    when 'cancel'
      @enrollment.set_closed Enrollment::COMPLETION_CANCELED, @user
    when 'fulfill'
      @enrollment.set_closed Enrollment::COMPLETION_FULFILLED, @user
    when 'approve'
      @enrollment.set_active @user
    else
      raise TinyException, 'Invalid update command'
    end

    show
  end

  def destroy
    @enrollment.destroy

    render nothing: true, status: 204
  end

protected

  PERMITTED_INCLUDES = %w[contract contract.facilitator contract.term credit_assignments credit_assignments.credit participant turnins turnins.assignment meeting_participants meeting_participants.meeting].freeze

  def get_includes(include_params)
    return nil if include_params.nil?

    val = include_params
          .split(',')
          .map(&:underscore) & EnrollmentsController::PERMITTED_INCLUDES

    val
  end

  def get_enrollment
    @enrollment = Enrollment.find(params[:id])
  end

  def entitle_enrollment
    true
  end

  def entitle_contract
    true
  end

  def enrollment_create_params
    params
      .require(:data)
      .require(:relationships)
      .require(:user_ids)
  end

end
