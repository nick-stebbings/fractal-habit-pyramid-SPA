# frozen_string_literal: true

module Hht
  module Repos
    class HabitNodeRepo < ROM::Repository[:habit_nodes]
      struct_namespace Entities
      include Import['persistence.container']
      # include Import['mappers.subtree']
      commands :create, delete: :by_pk, update: :by_pk

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

      def as_json(id)
        habit_node = by_id(id).one
        return nil unless habit_node
        { 
          'id' => habit_node.fetch(:id),
          'lft' => habit_node.fetch(:lft),
          'rgt' => habit_node.fetch(:rgt),
          'parent_id' => habit_node.fetch(:parent_id),
        }
      end

      def all_as_json
        { :habit_nodes => habit_nodes.all }.to_json
      end

      def root_node
        query(parent_id: nil)
      end

      def root_node_children
        children_of_parent(root_node)
      end

      def children_of_parent(parent_id)
        habit_nodes.where(parent_id: parent_id)
      end

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

      # Nested relation of nodes with parents, retricted by lft/rgt values
      def nest_parent_with_descendant_nodes(lft_val, rgt_val)
        habit_nodes
          .where { lft >= lft_val }
          .where { rgt <= rgt_val }
          .combine(habit_nodes: :parent)
      end

      # Modified preorder traversal queries:
      def restrict_on_rgt_vals_greater_than_value(val)
        habit_nodes
          .where { rgt > val }
      end

      def restrict_on_lft_vals_greater_than_value(val)
        habit_nodes
          .where { lft > val }
      end
# Addition
#     To add a node, simply add 2 to all the values after that node, then insert the node into place. As an example, inserting a "Horror" section under Fiction is a simple matter of:

#         Finding where to insert "Horror" (after 7)
        # Do this by taking the rgt value of the parent (this will add as last child)
#         Adding 2 to every Left value past 7
#         Adding 2 to every Right value past 7
#         Inserting a new row, "Horror", with Left=8 and Right=9

#     At the end of this, "Fiction" would have a Left of 3 and Right of 10. 
# Removal
#     A very similar process is used to delete a node from the tree. For example, to delete "Fantasy":

#         Fetch the Right value of the node (in this case, 5)
#         Subtract 2 from every Left value past 5
#         Subtract 2 from every Right value past 5
#         Remove the node row




    end
  end
end
