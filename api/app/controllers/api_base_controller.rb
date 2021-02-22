# frozen_string_literal: true

class ApiBaseController < ApplicationController
  include Secured

  before_action :get_limit, only: :index
  
  def get_limit
    @limit = Integer(params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT])
    @limit = nil if @limit == -1
  end
end
