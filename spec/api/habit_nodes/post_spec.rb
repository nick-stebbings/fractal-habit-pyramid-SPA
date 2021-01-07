# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a valid habit_node json' do
    let(:habit_node_repo) { Hht::Repos::HabitNodeRepo.new }
    let(:resource) { JSON.load response.body }

    before do
      @habit_node = valid_habit_node
      @habit_node_id = @habit_node.attributes[:id]
      @habit_node_as_json = @habit_node.attributes.to_json
    end

    describe 'When #post to /api/habit_nodes' do
      let(:response) { post('/api/habit_nodes', @habit_node_as_json) }

      describe 'Then returns status code 201' do
        it { expect(response.status).to eq 201 }
      end

      describe 'And it persisted the habit_node json' do
        it do
          response
          expect(habit_node_repo.as_json(@habit_node_id)).to eq (parse_json @habit_node_as_json)
        end
      end
    end
  end
end
