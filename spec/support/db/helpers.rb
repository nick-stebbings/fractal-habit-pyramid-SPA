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
      attributes_for(:domain)
    end

    def valid_root_node
      attributes_for(:root_node)
    end

    def valid_habit_node
      attributes_for(:parent_node)
    end

    def valid_parent_node
      attributes_for(:parent_node)
    end

    def valid_child_node
      attributes_for(:child_node)
    end
  end
end
