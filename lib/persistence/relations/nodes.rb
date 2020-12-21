module Persistence
  module Relations
    class Nodes < ROM::Relation[:sql]
      schema(:nodes) do
        attribute :id, Types::Integer
      end
      
      def all
        nodes.to_a
      end
    end

  end
end