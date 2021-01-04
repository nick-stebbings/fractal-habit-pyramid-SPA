# frozen_string_literal: true

require_relative 'system/boot'
require 'rom-sql'
require 'rom/sql/rake_task'
require 'rspec/core/rake_task'

namespace :db do
  task :setup do
    Hht::Container.start(:db)
    config = Hht::Container['db.config']
    config.gateways[:default].use_logger(Logger.new($stdout))
  end

  task :seed do
  end
end

RSpec::Core::RakeTask.new(:spec) do |t|
  t.pattern = Dir.glob('spec/**/*_spec.rb')
end
task :default => :spec