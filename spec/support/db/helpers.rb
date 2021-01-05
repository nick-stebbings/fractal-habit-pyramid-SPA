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
      Hht::Container["db.connection"]
    end
  end
end