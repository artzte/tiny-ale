class LearningRequirementsController < ApiBaseController
  def categories
    render json: LearningRequirement.categories
  end

  def index
    result = LearningRequirement
      .all
      .sort
    count = LearningRequirement.count
    options = { meta: { count: count } }
    render json: LearningRequirementSerializer.new(result, options), status: 200
  end
end
