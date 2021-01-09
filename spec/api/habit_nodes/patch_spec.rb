# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a valid habit_node update json AND a persisted habit_node tuple' do
    let(:resource) { JSON.load response.body }

    before do
      @habit_node_update = { id: 3 }
      
      @habit_node = valid_root_node.create
      habit_node_repo.create(@habit_node.attributes)
      @habit_node_id = @habit_node.attributes[:id]
    end

    describe 'When #patch to /api/habit_trees/nodes/:id' do
      let!(:response) { patch("/api/habit_trees/nodes/#{@habit_node_id}", @habit_node_update.to_json) }

      it 'Then returns status code 201' do
        expect(response.status).to eq 201
      end

      it 'And it patched the habit_node' do
        updated_attributes = @habit_node.attributes.merge(@habit_node_update).to_json

        expect(habit_node_repo.as_json(3)).to eq (parse_json updated_attributes)
      end
    end
  end
end