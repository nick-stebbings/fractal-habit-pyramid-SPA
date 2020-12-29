module App
  module Relations
    class HabitNodes < ROM::Relation[:sql]
      schema(:habit_nodes, infer: true)
      
      def all
        habit_nodes.to_a
      end
    end

  end
end