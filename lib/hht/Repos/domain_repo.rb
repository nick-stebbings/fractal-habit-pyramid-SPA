# frozen_string_literal: true

module Hht
  module Repos
  class DomainRepo < ROM::Repository[:domains]
    # struct_namespace Hht::Entities
    include Import['persistence.container']

    # find all domains with the given attributes
    def query(conditions)
      domains.where(conditions)
    end

    # collect a list of all domain ids
    def ids
      binding.pry
      domains.where(id: 1)
    end
  end
  end
end
