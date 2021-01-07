# frozen_string_literal: true

module Test
  module DatabaseHelpers
    include Dry::Monads[:result]

    module_function

    def success
      Success
    end

    def failure
      Failure
    end

    def app
      Hht::Api
    end

    def rom
      Hht::Container['persistence.container']
    end

    def db
      Hht::Container['db.connection']
    end

    def valid_domain
      Factory.registry.elements[:domain].create
    end

    def valid_habit_node
      Factory.registry.elements[:habit_node].create
    end
  end
end
