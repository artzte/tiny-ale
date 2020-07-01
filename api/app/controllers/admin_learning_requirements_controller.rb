class AdminLearningRequirementsController < AdminController
  def create
    requirement = Ealr.new requirement_attributes

    requirement.save!

    render json: EalrSerializer.new(requirement)
  end

  def update
    requirement = Ealr.find params[:id]

    requirement.update_attributes! requirement_attributes

    render json: EalrSerializer.new(requirement)
  end

  def destroy
    requirement = Ealr.find params[:id]

    requirement.destroy!

    render nothing: true, status: 204
  end

  private

  def requirement_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:ealr, :seq, :category)
  end
end
