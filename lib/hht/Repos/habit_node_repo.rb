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
        habit_nodes.where(id: 1)
        binding.pry
      end
    end
  end
end
