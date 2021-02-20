# frozen_string_literal: true
require 'pry'
RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a valid habit_node json' do
    let(:resource) { JSON.load response.body }

    before do
      @habit_node = valid_root_node.create
      @habit_node_id = @habit_node.attributes[:id]
      habit_node_repo.create(@habit_node.attributes)
      @habit_node_as_json = @habit_node.attributes.to_json
    end

    describe 'When #put to /api/habit_trees/nodes/:id' do
      let!(:response) { put("/api/habit_trees/nodes/#{@habit_node_id}", @habit_node_as_json) }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      it 'And it persisted the habit_node' do
        expect(habit_node_repo.as_json(@habit_node_id)).to eq (parse_json @habit_node_as_json)
      end

      # it 'And it returns the persisted node' do
      #   expect(response.body).to be_json_eql(@habit_node_as_json)
      # end

      # it 'And it forwards to the URI of the persisted node' do
      #   expect(response.headers['Location']).to match(/.*(?:habit_trees\/nodes\/#{@habit_node_id})/)
      # end
    end
  end
end