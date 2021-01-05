require 'rom-factory'
require_relative "helpers"

Factory = ROM::Factory.configure do |config|
  config.rom = Test::DatabaseHelpers.rom
end

Dir.glob(File.join(SPEC_ROOT, 'factories', '*.rb')).each { |file| require file }