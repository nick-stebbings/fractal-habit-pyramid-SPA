# frozen_string_literal: true

ENV['APP_ENV'] ||= 'development'
APP_ROOT = File.expand_path('..', __dir__)
puts 'Running in the ' + ENV['APP_ENV'] + ' environment.'

require 'bundler'
Bundler.setup(:default, ENV['APP_ENV'])

require 'dotenv'
Dotenv.load("config/.env.#{ENV['APP_ENV']}")

require_relative 'hht/container'
require_relative 'hht/import'
Hht::Container.finalize!

ROM_CONTAINER = Hht::Container['persistence.container']

require_relative 'hht/api'
