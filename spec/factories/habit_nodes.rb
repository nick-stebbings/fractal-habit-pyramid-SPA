# frozen_string_literal: true

FactoryBot.define do
  factory :habit_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 69 }
    lft { 14 }
    rgt { 15 }
    parent_id { 68 }
  end

  factory :root_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 1 }
    lft { 1 }
    rgt { 2 }
    parent_id { nil }
  end

  factory :parent_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 4 }
    lft { 1 }
    rgt { 2 }
    parent_id { nil }
  end

  factory :child_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 5 }
    lft { 3 }
    rgt { 4 }
    parent_id { 4 }
  end

  factory :prospective_parent_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 4 }
    lft { 1 }
    rgt { 2 }
    parent_id { nil }
  end

  factory :prospective_child_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 5 }
    lft { nil }
    rgt { nil }
    parent_id { 4 }
  end
end