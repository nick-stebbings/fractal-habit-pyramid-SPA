# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a persisted node' do
    let(:habit_node_repo) { Hht::Repos::HabitNodeRepo.new }
    let(:factory) { Factory.registry.elements[:habit_node] }
    let(:factory_habit_node) { factory.create }

    before do
      habit_node_repo.create({ id: 1, lft: 1, rgt: 2 })
    end

    describe 'When #get to /api/habit_trees' do
      let(:response) { get '/api/habit_trees' }

      describe 'Then returns status code 200' do
        it { expect(response.status).to eq 200 }
      end
    end
  end
end
