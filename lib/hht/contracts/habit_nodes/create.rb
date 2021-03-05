# frozen_string_literal: true

module Hht
  module Contracts
    module HabitNodes
      class Create < Dry::Validation::Contract
        include Import['repos.habit_node_repo']
        params do
          required(:parent_id)
        end

        rule(:parent_id) do
          key.failure('Parent does not exist') unless habit_node_repo.by_id(value).one
        end
      end
    end
  end
end
