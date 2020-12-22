# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :habits do
      primary_key :id
      column :name, String
      column :description, String
      foreign_key :domain_id, :domains, foreign_key_constraint_name: 'fk_habit_node'
    end
  end
end

 

    # create_table :nodes do
    #   primary_key :id

    #   # column :first_name, String
    #   # column :last_name, String
    #   # column :age, Integer

    #   # column :created_at, :timestamp, null: false
    #   # column :updated_at, :timestamp, null: false
    # end

    # create_table :dates do
    #   primary_key :id

    #   # column :first_name, String
    #   # column :last_name, String
    #   # column :age, Integer

    #   # column :created_at, :timestamp, null: false
    #   # column :updated_at, :timestamp, null: false
    # end

    # create_table :nodes_dates do
    #   Integer :node_id
    #   Integer :date_id
    #   primary_key [:node_id, :date_id], name: 'pk_node_date'
    # end