# frozen_string_literal: true

module Hht
  module Repos
    class HabitNodeRepo < ROM::Repository[:habit_nodes]
      struct_namespace Entities
      include Import['persistence.container']

      # find all nodes with the given attributes
      def query(conditions)
        habit_nodes.where(conditions)
      end

      # collect a list of all node ids
      def ids
        binding.pry
        habit_nodes.pluck(:id)
      end

      # collect a list of all node ids
      def by_id(id)
        habit_nodes.by_pk(id)
      end

      # return a node combined with its domain
      def combine_by_id_with_domain(id)
        habit_nodes.combine(:domains).by_pk(id)
      end
    end
  end
end
