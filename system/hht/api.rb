# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/json'

require_relative 'container'
require File.join(APP_ROOT, "lib", "subtree")

module Hht
  class Api < Sinatra::Base
    set :root, File.expand_path('..', __dir__)
    set :public_folder, (proc { File.join(root, 'public') })

    include Import['repos.habit_node_repo']
    include Import['repos.domain_repo']

    helpers do
      def map_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .reject { |node| node.parent.nil? }
          .map { |node| node.to_tree_node }
      end

      def map_node_and_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .select { |node| !node.parent.nil? || node.id == parent_id }
          .map { |node| node.to_tree_node }
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

    get '/' do
      binding.pry
      "Hello, world!"
    end

    # Get root node tree
    get '/habit_trees' do
      root_id = habit_node_repo.root_node.one.id
      tree = generate_subtree(root_id)
      json Subtree.jsonify(tree)
    end

    # Get subtree by root node id
    get '/habit_trees/:root_id' do |root_id|
      tree = generate_subtree(root_id)
      json Subtree.jsonify(tree)
    end

    post '/habit_trees' do
      binding.pry
    end

    # RESOURCES TO BE DESCRIBED LATER
    get '/habits' do
      binding.pry
    end

    get '/dates' do
      binding.pry
    end

    get '/domains' do
      binding.pry
    end

    post '/habits' do
      binding.pry
    end

    post '/dates' do
      binding.pry
    end

    post '/domains' do
      binding.pry
    end

    # run! if app_file == $0
  end
end
