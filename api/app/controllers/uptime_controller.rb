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

    render js: script
  end

private
  def read_config_local
    path = Pathname.new(Rails.application.root).join("config", "local-config.json")
    File.read path
  end

  def read_config_s3
    s3 = Aws::S3::Client.new region: ENV['AWS_REGION']
    resp = s3.get_object(bucket: ENV['AWS_CONFIG_BUCKET'], key: "environments/#{ENV['SUBDOMAIN']}/config.json")
    resp.body.read
  end
end