# frozen_string_literal: true

require 'pry'

module Hht
  module Entities
    class Node < ROM::Struct
      require 'tree'

      def initialize(attributes)
        @attributes = attributes
      end

      def to_s
        to_tree.to_s
      end

      def to_tree
        Tree::TreeNode.new(attributes[:id])
      end
    end
  end
end
