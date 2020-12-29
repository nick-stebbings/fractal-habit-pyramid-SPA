module App
  module Repos
    class HabitNodeRepo < ROM::Repository[:nodes]
      # struct_namespace Entities
      include Import['container']

      # find all nodes with the given attributes
      def query(conditions)
        nodes.where(conditions)
      end

      # collect a list of all node ids
      def ids
        nodes.pluck(:id)
      end
    end
  end
end
