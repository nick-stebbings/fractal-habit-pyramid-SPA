# boot.rb

ENV['APP_ENV'] ||= "development"

require "bundler"
Bundler.setup(:default, ENV["APP_ENV"])

require "dotenv"
Dotenv.load("config/.env", "config/.env.#{ENV["APP_ENV"]}")