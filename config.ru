# frozen_string_literal: true

require_relative 'system/boot'
if ENV['APP_ENV'] == 'development'
  require 'pry'
end

run Hht::Api
