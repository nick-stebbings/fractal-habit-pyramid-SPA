module Hht
  module Contracts
    module HabitNodes
      class Create < Dry::Validation::Contract
        params do
          required(:id).filled(:integer)
          required(:lft).filled(:integer)
          required(:rgt).filled(:integer)
          optional(:parent_id).filled(:integer)
        end
      end
    end
  end
end