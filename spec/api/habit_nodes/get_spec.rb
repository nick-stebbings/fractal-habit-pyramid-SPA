# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a persisted node' do
    before(:all) do
      habit_node_repo.create(valid_habit_node.attributes)
    end

    describe 'When #get to /api/habit_trees' do
      let(:response) { get '/api/habit_trees' }

      describe 'Then returns status code 200' do
        it { expect(response.status).to eq 200 }
      end
    end
  end
end
