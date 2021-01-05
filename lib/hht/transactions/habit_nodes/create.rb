module Hht
  module Transactions
    module HabitNodes
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)

        def call(input)
          values = yield validate(input)
          user = yield persist(values)

          Success(user)
        end

        def validate(input)
          create_contract = Contracts::HabitNodes::Create.new
          create_contract.call(input).to_monad
        end

        def persist(result)
          rom = Hht::Container['persistence.container']
          # repo = Hht::Repos::HabitNodeRepo.new

          Success(rom.commands[:habit_nodes][:create].call(result.values))
        end
      end
    end
  end
end