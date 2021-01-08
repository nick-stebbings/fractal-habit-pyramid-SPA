# frozen_string_literal: true

RSpec.describe 'Feature: habit_trees' do
  context 'Given a persisted node' do
    before do
      habit_node_repo.create(valid_root_node.create.attributes)
    end

    describe 'When #get to /api/habit_trees' do
      let!(:response) { get '/api/habit_trees' }

      it 'Then returns correct status code' do
        expect(response.status).to eq 200
      end
    end
  end
end
