# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :node_date do
      Integer :node_id
      Integer :date_id
      primary_key [:node_id, :date_id], name: 'pk_node_date'
      foreign_key [:node_id], :nodes, name: 'fk_node'
      foreign_key [:date_id], :dates, name: 'fk_date'
    end
  end
end
