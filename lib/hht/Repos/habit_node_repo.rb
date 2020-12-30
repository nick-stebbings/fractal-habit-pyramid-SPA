# frozen_string_literal: true

module Hht
  module Repos
    class HabitNodeRepo < ROM::Repository[:habit_nodes]
      struct_namespace Entities
      include Import['persistence.container']

      # restrict by passed criteria
      def query(criteria)
        habit_nodes.where(criteria)
      end

      # project on the id attribute
      def ids
        habit_nodes.pluck(:id)
      end

      # restrict on the id attribute
      def by_id(id)
        habit_nodes.by_pk(id)
      end

      # return root node
      def root_node
        query(parent_id: nil)
      end

      # return root node's children
      def root_node
        query(parent_id: nil)
      end

      # restrict by habit_node_id and combine with domain
      def restrict_on_id_combine_with_domain(id)
        habit_nodes.combine(:domains).by_pk(id)
      end

      def children_of_parent(parent_id)
        habit_nodes.where(parent_id: parent_id)
      end

      # return child nodes
      def restrict_on_parent_id_combine_with_children(id)
        children_of_parent(id).combine(:habit_nodes)
      end
    end
  end
end
