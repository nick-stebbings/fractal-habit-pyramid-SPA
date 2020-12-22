# frozen_string_literal: true

ENV['APP_ENV'] ||= 'development'

require 'bundler'
Bundler.setup(:default, ENV['APP_ENV'])

require 'dotenv'
Dotenv.load('config/.env', "config/.env.#{ENV['APP_ENV']}")

require_relative 'hht/container'
require_relative 'hht/import'
Hht::Container.finalize!

require_relative 'hht/api'
