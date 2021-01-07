# frozen_string_literal: true

Factory.define(:habit_node, struct_namespace: Entities) do |f|
  f.sequence(:id) { |n| n }
  f.lft 1
  f.rgt 2
  f.sequence(:parent_id) { |n| n - 1 }
end
