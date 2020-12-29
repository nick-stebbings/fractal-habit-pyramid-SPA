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
          has_many :habit_nodes
        end

      end

      def all
        habit_nodes.to_a
      end
    end
  end
end