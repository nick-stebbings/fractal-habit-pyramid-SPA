# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given db setup' do
    let(:habit_node_repo) { Hht::Repos::HabitNodeRepo.new }
    before do
    end

    describe 'When post to /api/habit_trees' do
      let(:response) { post '/api/habit_trees' }

      describe 'Then returns status code 200' do
        it { expect(response.status).to eq 200 }
      end

      # describe 'And somethingelse' do
      #   it { expect(athing).to matcher }
      # end
    end
  end
end
