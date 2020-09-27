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

  def config_script
    if ENV['RAILS_ENV'] == "development"
      config = read_config_local
    else
      config = read_config_s3
    end

    script = "window._tinyALE = { config: #{config} }"

    pp script

    render js: script
  end

  private
  def read_config_local
    path = Pathname.new(Rails.application.root).join("config", "local-config.json")
    File.read path
  end

  def read_config_s3
    "{}"
  end
end