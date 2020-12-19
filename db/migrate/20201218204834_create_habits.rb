# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :habits do
      primary_key :id
      column :name, String, size: 25, null: false
      column :description, String, size: 80
      column :initiation_date, DateTime, null: false

      foreign_key :domain_id, :domains, foreign_key_constraint_name: 'fk_habit_domain', on_delete: :cascade
    end
  end
end