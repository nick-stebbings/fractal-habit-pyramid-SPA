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
        #       MODIFIED PREORDER TRAVERSAL
        habit_node_repo.create(habit_node)
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
        #       MODIFIED PREORDER TRAVERSAL
        habit_node_repo.update(node_id, habit_node)
        url = "http://localhost:9393/habit_trees/nodes/#{habit_node['id']}"
        response.headers['Location'] = url

        status 201
      end

      delete '/:node_id' do |node_id|
        habit_node_repo.delete(node_id)
        status 204
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

    # RESOURCES TO BE DESCRIBED LATER
    namespace '/api/habits' do
    end
    namespace '/api/dates' do
    end
    namespace '/api/habit_dates' do
    end
  end
end
