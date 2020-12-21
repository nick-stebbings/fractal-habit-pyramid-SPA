module Hht
  module Repos
    class NodeRepo < ROM::Repository[:nodes]
      struct_namespace Hht::Entities

      include Hht::Import['persistence.container']

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