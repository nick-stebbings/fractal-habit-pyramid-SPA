# frozen_string_literal: true

# Gemfile
source 'https://rubygems.org'
ruby '2.4.1'

gem 'rake'

# Frameworks
gem 'sinatra'
gem 'sinatra-contrib'

group :production do
  gem 'puma'
end

group :development do
  gem 'pry-byebug'
  gem 'racksh'
  gem 'rubocop'
  gem 'shotgun'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'rack-test',           '~> 1.1'
  gem 'rspec',               '~> 3.8'
  gem 'selenium-webdriver',  '~> 3.142', '>= 3.142.2'
end

# Environment
gem 'dotenv'
gem 'dry-system'

# Persistence Layer
gem 'pg'
gem 'rom'
gem 'rom-sql'

# Data structures
# gem 'tree', '~> 0.2.1'
gem 'json'
gem 'rubytree'
