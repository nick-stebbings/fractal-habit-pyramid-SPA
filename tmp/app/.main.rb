# main.rb

require_relative '../../config/application'
require 'sinatra'
require 'sinatra/base'

App::Application.finalize!

set :root, File.dirname(__FILE__)
set :public_folder, Proc.new { File.join(root, 'public') }

class InternalAPI < Sinatra::Base
  include App::Import["container"]
  
  def call
    puts container.inspect
  end

  get '/' do
    "Hello World"
  end
end