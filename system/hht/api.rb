# frozen_string_literal: true

require_relative 'container'
require_relative 'subtree'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/json'

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

      def map_node_and_descendants_to_nodes(root_id)
        root = habit_node_repo.by_id(root_id).one
        habit_node_repo
          .nest_parent_with_descendant_nodes(root.lft, root.rgt)
          .to_a
      end

      def generate_subtree(root_id)
        nodes_array = map_node_and_descendants_to_nodes(root_id)
        root_node = nodes_array.shift
        Subtree.new(root_node.to_tree_node, nodes_array).build
      end
    end

    get '/' do
      json Subtree.jsonify(generate_subtree(1))
    end
  end
end
