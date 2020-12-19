module App
  module Relations
    class Node < ROM::Relation[:sql]
      schema(:nodes, infer: true)
    end

    def all
      nodes.to_a
    end

  end
end