# frozen_string_literal: true

class UptimeController < ApplicationController
  def homepage
    render plain: 'TinyALE Version 0'
  end

  def index
    render plain: 'ok'
  end

  def db
    User.count
    render plain: 'ok'
  end
end