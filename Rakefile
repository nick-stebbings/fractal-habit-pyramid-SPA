require_relative 'system/environment'
require_relative 'system/hht/container'
require 'rom-sql'
require 'rom/sql/rake_task'
require 'rspec/core/rake_task'
require 'pry'

namespace :db do
  task :setup do
    Hht::Container.start(:db)
    config = Hht::Container['db.config']
    config.gateways[:default].use_logger(Logger.new($stdout))
  end

  desc 'seed the database with some dummy data'
  task :seed do
    connection = Hht::Container['db.connection']
    queries = File.read(File.join(APP_ROOT, 'db', 'sample-queries.sql'))
    connection.run(queries)
  end
end

RSpec::Core::RakeTask.new(:spec) do |t|
  ROM::SQL::RakeSupport.env = Hht::Container['db.config']
  t.pattern = Dir.glob('spec/transactions/*_spec.rb')
  # t.pattern = Dir.glob('spec/api/domains/**/*_spec.rb')
end
task default: :spec