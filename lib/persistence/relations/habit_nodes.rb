# frozen_string_literal: true

module Persistence
  module Relations
    class HabitNodes < ROM::Relation[:sql]
      schema(:habit_nodes) do
        attribute :id, Types::Integer
        attribute :parent_id, Types::ForeignKey(:habit_nodes)
        attribute :lft, Types::Integer
        attribute :rgt, Types::Integer
        attribute :domain_id, Types::ForeignKey(:domains)
        primary_key :id

        associations do
          belongs_to :domain
          belongs_to :habit_node, as: :parent
          has_many :habit_nodes, as: :child
        end

      end

      def all
        habit_nodes.to_a
      end
    end
  end
end
