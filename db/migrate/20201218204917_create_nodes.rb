# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :nodes do
      primary_key :id
      column :parent_id, Integer, on_delete: :cascade
      column :lft, Integer, null: false
      column :rgt, Integer, null: false
      column :habit_id, Integer, null: false, on_delete: :cascade
      
      foreign_key [:parent_id], :nodes, name: 'fk_child_parent'
      foreign_key [:habit_id], :habits, name: 'fk_node_habit'
    end
  end
end