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
    model = Status.find_by_statusable_type_and_month(params[:statusable_type], params[:statusable_id], params[:month])
    unless existing
      model = Status.create! statusable_type: params[:statusable_type], statusable_id: params[:statusable_id], month: params[:month]
    end
    model.update_attributes! status_attributes

    if note_attribute.present?
      Note.create! notable: model, note: notes_attribute
    end

    render json: StatusSerializer.new(model, { include: ['notes'] })
  end

protected
  def status_attributes
    params.require(:attributes).permit(:academic, :attendance, :fte_hours, :met_fte_requirements, :held_periodic_checkins)
  end

  def notes_attribute
    params.require(:attributes).permit(:notes)
  end
end
