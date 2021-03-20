# frozen_string_literal: true

class CategoriesController < ApiBaseController
  def index
    order = (params[:order] || '')
            .split(',')
            .map(&:underscore)
            .join(',')

    result = Category
             .order(Arel.sql(order))
             .limit(@limit)

    count = Category.count

    options = { meta: { count: count } }

    render json: CategorySerializer.new(result, options)
  end
end
