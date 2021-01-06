# frozen_string_literal: true

require 'rom-factory'
require_relative 'helpers'

Factory = ROM::Factory.configure do |config|
  config.rom = Test::DatabaseHelpers.rom
end

Dir.glob(File.join(SPEC_ROOT, 'factories', '*.rb')).sort.each { |file| require file }
