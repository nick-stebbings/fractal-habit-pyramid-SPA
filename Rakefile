# frozen_string_literal: true

require_relative 'config/application'
require 'rom-sql'
require 'rom/sql/rake_task'

namespace :db do
  task :setup do
    Hht::Application.start(:db)
    config = Hht::Application['db.config']
    config.gateways[:default].use_logger(Logger.new($stdout))
  end
end
