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
      Tree::TreeNode.new("ID#{attributes[:id]}", "L#{attributes[:lft]}R#{attributes[:rgt]}")
    end
  end
end
