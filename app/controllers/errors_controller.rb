# frozen_string_literal: true

class ErrorsController < ApplicationController
  def notfound
    render json: { message: 'path not found' }, status: 404
  end
end
