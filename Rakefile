# frozen_string_literal: true

require_relative 'system/boot'
require 'rom-sql'
require 'rom/sql/rake_task'

namespace :db do
  task :setup do
    Hht::Container.start(:db)
    config = Hht::Container['db.config']
    config.gateways[:default].use_logger(Logger.new($stdout))
  end
end
