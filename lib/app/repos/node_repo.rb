module App
  module Repos
    class NodeRepo < ROM::Repository[:nodes]
      include Import['container']

    end
  end
end
