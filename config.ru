# frozen_string_literal: true

require_relative 'system/boot'
require 'pry' if ENV['APP_ENV'] == 'development'

run Hht::Api
