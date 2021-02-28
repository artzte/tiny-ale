# frozen_string_literal: true

class AssignmentsController < ApiBaseController
  def index
    conditions = {}

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    result = Assignment
             .where(conditions)
             .limit(@limit)

    count = Assignment.where(conditions).count

    options = {
      meta: {
        count: count
      },
      includes: [:turnins]
    }

    render json: AssignmentSerializer.new(result, options)
  end
end
