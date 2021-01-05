module Test
  module DatabaseHelpers
    module_function

    def rom
      ROM_CONTAINER
    end

    def db
      Hht::Container["db.connection"]
    end
  end
end