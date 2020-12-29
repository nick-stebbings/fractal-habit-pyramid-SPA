# frozen_string_literal: true

require_relative 'container'
require 'sinatra'
require 'sinatra/base'

module Hht
  class Api < Sinatra::Base
    set :root, File.expand_path('..', __dir__)
    set :public_folder, (proc { File.join(root, 'public') })

    include Import['repos.habit_node_repo']
    include Import['repos.domain_repo']

    def node_one
      habit_node_repo.query(id: '1').to_a
    end

    def node_all
      habit_node_repo.ids.to_a
    end

    get '/' do
      puts node_all
      binding.pry
    end
  end
end
