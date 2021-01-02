# frozen_string_literal: true

module Hht
  module Repos
    class HabitNodeRepo < ROM::Repository[:habit_nodes]
      struct_namespace Entities
      include Import['persistence.container']
      include Import['mappers.subtree']

      # restrict by passed criteria
      def query(criteria); habit_nodes.where(criteria); end

      # project on the id attribute
      def ids; habit_nodes.pluck(:id); end

      # restrict on the id attribute
      def by_id(id); habit_nodes.by_pk(id); end

      def root_node; query(parent_id: nil); end

      def root_node_children; children_of_parent(root_node); end

      def children_of_parent(parent_id); habit_nodes.where(parent_id: parent_id); end

      def restrict_on_id_combine_with_domain(id)
        habit_nodes.combine(:domains).by_pk(id)
      end

      def restrict_on_parent_id_combine_with_children(id)
        children_of_parent(id).combine(:habit_nodes)
      end

      # Nested relation of children (nesting retricted by parent_id)
      def nest_parent_with_immediate_child_nodes(parent_id)
        nest_parents = habit_nodes
          .combine(habit_nodes: :parent)
          .node(:parent) do |habit_node|
              habit_node.by_pk(parent_id)
            end
            
        nest_parents
          .order(:lft)
      end

      # Nested relation of nodes retricted by lft/rgt values
      def nest_parent_with_descendant_nodes(lft_val, rgt_val)
        habit_nodes
          .where { lft >= lft_val }
          .where { rgt <= rgt_val }
          .combine(habit_nodes: :parent)
      end
      
    end
  end
end
