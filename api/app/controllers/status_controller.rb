# frozen_string_literal: true

class StatusController < ApiBaseController
  def index
    joins = []

    conditions = {}
    selects = ['statuses.*']
    if params[:months]
      conditions[:month] = params[:months]
                           .split(',')
                           .collect { |month| expand_month(month) }
    end

    case params[:statusable_type]
    when 'enrollments'
      conditions[:statusable_type] = 'Enrollment'
      return render json: { message: 'conflicting request; must fetch enrollment or student status separately' }, status: 400 if params[:studentIds] 
    when 'students'
      conditions[:statusable_type] = 'User'
      return render json: { message: 'conflicting request; must fetch enrollment or student status separately' }, status: 400 if params[:enrollmentIds]
    end

    emptyResult = {
      data: [],
      meta: {
        count: 0
      }
    }

    if params[:studentIds]
      studentIds = params[:studentIds]
      return render json: emptyResult if studentIds.blank?

      conditions[:statusable_id] = studentIds.split(',')
    end

    if params[:enrollmentIds]
      enrollmentIds = params[:enrollmentIds]
      return render json: emptyResult if enrollmentIds.blank?

      conditions[:statusable_id] = params[:enrollmentIds].split(',')
    end

    if conditions[:statusable_type] == 'User'
      joins.push('INNER JOIN users AS students ON students.id = statuses.statusable_id AND statuses.statusable_type = "User"')
      selects.push('students.coordinator_id as coordinator_id')
    end

    result = Status
             .where(conditions)
             .joins(joins.join(' '))
             .select(selects.join(','))
             .limit(@limit)
    count = Status.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: [:creator]
    }

    render json: StatusSerializer.new(result, options)
  end


  def update
    statusable_type = params[:statusable_type] == 'students' ? 'User' : 'Enrollment'
    model = Status.find_by_statusable_type_and_statusable_id_and_month(statusable_type, params[:statusable_id], params[:month])
    unless model
      model = Status.new statusable_type: statusable_type,
        statusable_id: params[:statusable_id],
        month: params[:month],
        creator: current_user
    end

    model.update_attributes! status_attributes.merge(
      :academic_status => status_code_for(status_attributes[:academic_status]),
      :attendance_status => (status_code_for(status_attributes[:attendance_status]) or model.attendance_status or Status::STATUS_ACCEPTABLE)
    )

    notes = notes_attribute[:notes]
    if notes.present?
      Note.create! notable: model, note: notes, creator: current_user
    end

    render json: StatusSerializer.new(model, { include: ['notes'] })
  end

protected
  def status_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:academic_status, :attendance_status, :fte_hours, :met_fte_requirements, :held_periodic_checkins)
  end

  def notes_attribute
    params
      .require(:data)
      .require(:attributes)
      .permit(:notes)
  end

private
  def status_code_for status
    case status
    when 'participating'
      Status::STATUS_PARTICIPATING
    when 'satisfactory'
      Status::STATUS_ACCEPTABLE
    when 'unsatisfactory'
      Status::STATUS_UNACCEPTABLE
    end
  end

end
