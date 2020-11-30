# frozen_string_literal: true

class GraduationPlanRequirementsController < ApiBaseController
  def index
    order = 'position,name'

    result = GraduationPlanRequirement
             .includes(:children)
             .order(Arel.sql(order))
             .limit(@limit)

    count = GraduationPlanRequirement.count

    options = {
      meta: {
        count: count,
        params: {
          status: params[:status]
        }
      }
    }

    render json: GraduationPlanRequirementSerializer.new(result, options), status: 200
  end

  def show
    requirement = GraduationPlanRequirement.find params[:id]

    render json: GraduationPlanRequirementSerializer.new(requirement)
  end
end
