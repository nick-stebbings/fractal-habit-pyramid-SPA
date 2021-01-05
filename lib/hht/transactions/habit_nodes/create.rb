module Hht
  module Transactions
    module HabitNodes
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import["contracts.habit_nodes.create"]
        include Import["persistence.container"]

        def call(input)
          values = yield validate(input)
          habit_node = yield persist(values)

          Success(habit_node)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          command = container.commands[:habit_nodes][:create]
          Success(command.call(result.values))
        end
      end
    end
  end
end