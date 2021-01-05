module Test
  module DatabaseHelpers
    module_function

    def rom
      Hht::Container['persistence.container']
    end

    def db
      Hht::Container["db.connection"]
    end
  end
end