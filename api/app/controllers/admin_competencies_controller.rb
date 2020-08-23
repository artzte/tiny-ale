class AdminCompetenciesController < AdminController
  def create
    requirement = Ealr.new requirement_attributes

    requirement.save!

    render json: CompetencySerializer.new(requirement)
  end

  def update
    requirement = Ealr.find params[:id]

    requirement.update_attributes! requirement_attributes

    render json: CompetencySerializer.new(requirement)
  end

  def destroy
    requirement = Ealr.find params[:id]

    requirement.destroy!

    render nothing: true, status: 204
  end

  private

  def requirement_attributes
    p = params.require(:data)
          .require(:attributes)
          .permit(:competency, :seq, :category)

    {
      seq: p[:seq],
      ealr: p[:competency],
      category: p[:category],
    }.compact
  end
end
