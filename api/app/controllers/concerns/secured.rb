# frozen_string_literal: true

# app/controllers/concerns/secured.rb

require './lib/json_web_token'

# frozen_string_literal: true
module Secured
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_request!
  end

  def current_user
    @user
  end

  private

  def render_unauthorized(message = 'Not authorized')
    render json: { errors: [message] }, status: :unauthorized
  end

  def authenticate_request!
    permissions = get_permissions

    render_unauthorized && return if permissions.empty?

    user_id = get_user_id

    @user = User.find_by_id user_id

    unless @user
      Rails.logger.error "Auth0: identity user databaseId #{user_id} did not find matching user"
      render_unauthorized && return
    end

    return @user

  # DecodeError is the JWT base error
  rescue JWT::DecodeError => error
    Rails.logger.error "JWT: exception #{error.message}"
    render_unauthorized

  rescue Exception => error
    Rails.logger.error "Auth: exception #{error.message}"
    render_unauthorized
  end

  def http_token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def get_permissions
    JsonWebToken.extract_permissions(http_token)
  end

  def get_user_id
    if Rails.env == "development" and Rails.application.config.constants[:OFFLINE]
      # get either Jane Grey from the bootstrap seeds, or the user with ID 1,
      # which would be Eric's old tinySIS admin identity.
      admin_user = User.find_by_last_name('Grey') || User.find(1)
      return admin_user.id
    end

    JsonWebToken.extract_user_id(http_token)
  end
end
