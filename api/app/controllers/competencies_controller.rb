class CompetenciesController < ApiBaseController
  def categories
    render json: Ealr.categories
  end

  def index
    result = Ealr
      .all
      .sort
    count = Ealr.count
    options = { meta: { count: count } }
    render json: CompetencySerializer.new(result, options), status: 200
  end
end
