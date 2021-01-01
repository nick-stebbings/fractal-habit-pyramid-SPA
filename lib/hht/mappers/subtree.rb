# frozen_string_literal: true
require 'tree'
require 'rom/transformer'

module Hht
  module Mappers
    # Subtree made of RubyTree nodes
    class Subtree# < ROM::Transformer 
      # relation :habit_nodes
      # register_as :subtree

      def initialize()
        'hello world'
      end
    end
    #Array of RubyTree nodes that are descendants of @root_node, retricted based upon LFT/RGT values
    class NodesArray# < ROM::Transformer 
      # relation :habit_nodes
      # register_as :nodes_array
      def initialize(root_node, nodes_array)
        
        # reduce the nodes array
          # -- pushing all root nodes' children onto the root node
        return root_node if nodes_array.empty?
        
      end
    end
  end
end
