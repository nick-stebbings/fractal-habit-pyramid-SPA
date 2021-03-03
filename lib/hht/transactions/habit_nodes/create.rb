# frozen_string_literal: true

module Hht
  module Transactions
    module HabitNodes
      class Create
        require 'pry'
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
          binding.pry
          Success(habit_node_repo.create(result.values))
        end
      end
    end
  end
end
