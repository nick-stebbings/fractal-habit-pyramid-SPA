module App
  module Relations
    class Nodes < ROM::Relation[:sql]
      schema(:nodes, infer: true)
      
      def all
        nodes.to_a
      end
    end

  end
end