# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'sinatra/reloader'
require 'sinatra/json'
require 'multi_json'

require_relative 'container'
require File.join(APP_ROOT, 'lib', 'subtree')

module Hht
  class Api < Sinatra::Base
    register Sinatra::Namespace
    configure :development do
      register Sinatra::Reloader
    end
    set :root, APP_ROOT
    set :public_folder, (proc { File.join(APP_ROOT, 'public') })

    include Import[
      'repos.domain_repo',
      'repos.habit_node_repo',
    ]

    helpers do
      def map_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .reject { |node| node.parent.nil? }
          .map(&:to_tree_node)
      end

      def map_node_and_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .select { |node| !node.parent.nil? || node.id == parent_id }
          .map(&:to_tree_node)
      end

      def map_node_and_descendants_to_struct_nodes(root_id)
        root = habit_node_repo.by_id(root_id).one
        habit_node_repo
          .nest_parent_with_descendant_nodes(root.lft, root.rgt)
          .to_a
      end

      def generate_subtree(root_id)
        nodes_array = map_node_and_descendants_to_struct_nodes(root_id)
        root_node = nodes_array.shift
        Subtree.new(root_node.to_tree_node, nodes_array).build
      end
    end

    # get "/favicon.ico" do
    # end

    namespace '/api' do
      get '' do
        'Hello, world!'
      end

      post '' do
        halt 405
      end
    end

    namespace '/api/habit_trees/nodes' do
      # Return a list of nodes
      get '' do
        content_type 'application/json'
        json habit_node_repo.all_as_json
      end

      post '' do
        # Parse payload
        habit_node = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        habit_node_repo.create(habit_node)
        # If returns success monad, we know it persisted
        # So redirect
        url = "http://localhost:9393/habit_trees/nodes/#{habit_node['id']}"
        response.headers['Location'] = url
        
        # So we can return 201 (and the persisted item?)
        status 201
      end

      get '/:node_id' do |node_id|
        content_type 'application/json'
        json habit_node_repo.as_json(node_id)
      end

      patch '/:node_id' do |node_id|
        # Parse payload
        habit_node = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        habit_node_repo.update(node_id, habit_node)
        # If returns success monad, we know it persisted
        # So redirect
        url = "http://localhost:9393/habit_trees/nodes/#{habit_node['id']}"
        response.headers['Location'] = url
        
        # So we can return 201 (and the persisted item?)
        status 201
      end
    end

    namespace '/api/habit_trees' do
      # Get root node tree
      get '' do
        get "/#{habit_node_repo.root_node.one.id}"
      end
      # Get subtree by root node id
      get '/:root_id' do |root_id|
        tree = generate_subtree(root_id)
        json Subtree.as_json(tree)
      end
    end

    namespace '/api/domains' do
      get '' do
        content_type 'application/json'
        json domain_repo.all_as_json
      end
  
      post '' do
        # Parse payload
        domain = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        domain_repo.create(domain)
        # If returns success monad, we know it persisted
        # So redirect
        url = "http://localhost:9393/domains/#{domain['id']}"
        response.headers['Location'] = url
        
        # So we can return 201 (and the persisted item?)
        status 201
      end

      get '/:domain_id' do |id|
        content_type 'application/json'
        status 200
        json domain_repo.as_json(id)
      end

      put '/:domain_id' do |id|
        # Parse payload
        domain = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        
        existing = domain_repo.by_id(id)
        if existing
          domain_repo.update(id, domain) #TODO: make it REPLACE the domain
          # If returns success monad, we know it persisted
          # So redirect
          url = "http://localhost:9393/domains/#{domain['id']}"
          response.headers['Location'] = url
          status 201
        else
          halt 204
        end
      end

      patch '/:domain_id' do |id|
        # Parse payload
        domain = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        
        existing = domain_repo.by_id(id)
        if existing
          domain_repo.update(id, domain) #TODO: make it REPLACE the domain
          # If returns success monad, we know it persisted
          # So redirect
          url = "http://localhost:9393/domains/#{domain['id']}"
          response.headers['Location'] = url
          status 201
        else
          halt 204
        end
      end
    end

    # RESOURCES TO BE DESCRIBED LATER
    get '/habits' do
      binding.pry
    end

    get '/dates' do
      binding.pry
    end


    post '/habits' do
      binding.pry
    end

    post '/dates' do
      binding.pry
    end
  end
end
