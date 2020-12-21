require_relative "container"
require 'sinatra'
require 'sinatra/base'

module Hht
  class InternalAPI < Sinatra::Base
    set :root, File.expand_path("../../", __FILE__)
    set :public_folder, Proc.new { File.join(root, 'public') }

    include Hht::Import["node_repo"]

    def node_one
      node_repo.query(id: '1').to_a
    end

    def node_all
      node_repo.ids.to_a
    end

    get '/' do
      puts node_one
      puts node_all
    end
  end
end
