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
      Factory.registry.elements[:domain]
    end

    def valid_root_node
      Factory.registry.elements[:root_node]
    end

    def valid_habit_node
      Factory.registry.elements[:habit_node]
    end

    def valid_parent_node
      Factory.registry.elements[:parent_node]
    end

    def valid_child_node
      Factory.registry.elements[:child_node]
    end
  end
end
