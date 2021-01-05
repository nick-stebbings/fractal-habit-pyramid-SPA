# frozen_string_literal: true

ENV['APP_ENV'] ||= 'development'
require_relative 'environment'

require_relative 'hht/container'
require_relative 'hht/import'
Hht::Container.finalize!

require_relative 'hht/api'
