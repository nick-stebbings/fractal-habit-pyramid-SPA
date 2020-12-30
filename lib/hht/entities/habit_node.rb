# frozen_string_literal: true

module Entities
  class HabitNode < ROM::Struct
    require 'tree'

    def initialize(attributes)
      @attributes = attributes
    end

    def to_s
      to_tree_node.to_s
    end

    def to_tree_node
      Tree::TreeNode.new("Node #{attributes[:id]}")
    end
  end

  class SubTree
    def initialize(root_node, nodes_array)
      # reduce the nodes array
        # -- pushing all root nodes' children onto the root node
      while
    end
  end
end
