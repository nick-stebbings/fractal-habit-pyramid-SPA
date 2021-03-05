# frozen_string_literal: true

module Hht
  module Transactions
    module HabitNodes
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habit_nodes.create',
          'repos.habit_node_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit_node = yield persist(values)
          Success(habit_node)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          parent_id = result.values.data[:parent_id]
          siblings = habit_node_repo.children_of_parent(parent_id).to_a
          # Find siblings to append after,
          # Or else append after parent.
          rgt = siblings.empty? ? habit_node_repo.by_id(parent_id).one.rgt : siblings.last.rgt
          modified = habit_node_repo.modify_nodes_after(rgt, :add, parent_id)
          Success(habit_node_repo.create(modified)) if modified
        end
      end
    end
  end
end
