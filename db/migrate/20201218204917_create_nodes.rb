# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :nodes do
      primary_key :id
      column :parent_id, Integer, on_delete: :cascade
      column :lft, Integer, null: false
      column :rgt, Integer, null: false
      column :domain_id, Integer, null: false, on_delete: :cascade
      
      foreign_key [:parent_id], :nodes, name: 'fk_child_parent'
      foreign_key [:domain_id], :domains, name: 'fk_node_domain'
    end
  end
end