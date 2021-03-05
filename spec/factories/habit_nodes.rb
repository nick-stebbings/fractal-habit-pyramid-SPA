# frozen_string_literal: true

Factory.define(:root_node, relation: :habit_nodes, struct_namespace: Entities) do |f|
  f.id 1
  f.lft 1
  f.rgt 2
  f.parent_id nil
  # f.association(:habits)
end

Factory.define(:habit_node, struct_namespace: Entities) do |f|
  f.sequence(:id) { |n| 1 + n }
  f.lft 1
  f.rgt 2
  f.sequence(:parent_id) { |n| 1  }
  # f.association(:habits)
  # f.association(:parent)
end

Factory.define(:parent_node, relation: :habit_nodes, struct_namespace: Entities) do |f|
  f.id 4
  f.lft 1
  f.rgt 2
  f.parent_id nil
end

Factory.define(:child_node, relation: :habit_nodes, struct_namespace: Entities) do |f|
  f.id 1
  f.lft nil
  f.rgt nil
  f.parent_id 4
end
