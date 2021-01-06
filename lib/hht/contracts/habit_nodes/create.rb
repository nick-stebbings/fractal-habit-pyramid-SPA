# frozen_string_literal: true

module Hht
  module Contracts
    module HabitNodes
      class Create < Dry::Validation::Contract
        params do
          required(:lft).filled(:integer)
          required(:rgt).filled(:integer)
          optional(:parent_id)
        end
      end
    end
  end
end
