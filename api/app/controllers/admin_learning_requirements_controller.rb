class AdminLearningRequirementsController < AdminController
  def create
    requirement = LearningRequirement.new requirement_attributes

    requirement.save!

    render json: LearningRequirementSerializer.new(requirement)
  end

  def update
    requirement = LearningRequirement.find params[:id]

    requirement.update_attributes! requirement_attributes

    render json: LearningRequirementSerializer.new(requirement)
  end

  def destroy
    requirement = LearningRequirement.find params[:id]

    requirement.destroy!

    render nothing: true, status: 204
  end

  private

  def requirement_attributes
    p = params.require(:data)
          .require(:attributes)
          .permit(:ealr, :seq, :category)

    {
      seq: p[:seq],
      ealr: p[:ealr],
      category: p[:category],
    }.compact
  end
end
