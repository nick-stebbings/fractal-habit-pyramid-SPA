# frozen_string_literal: true

module Hht
  module Repos
    class DomainRepo < ROM::Repository[:domains]
      include Import['persistence.container']

      # find all domains with the given attributes
      def query(conditions)
        domains.where(conditions)
      end

      # collect a list of all domain ids
      def ids
        domains.pluck(:id).to_a
      end
    end
  end
end
