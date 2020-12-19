# main.rb

require 'sinatra'
require 'sinatra/base'

set :root, File.dirname(__FILE__)
set :public_folder, Proc.new { File.join(root, 'public') }

class InternalAPI < Sinatra::Base
  get '/' do
    "Hello World!"
  end
end