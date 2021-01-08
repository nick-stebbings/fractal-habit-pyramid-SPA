# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a persisted node' do
    before do
      @habit_node = valid_root_node.create
      habit_node_repo.create(@habit_node.attributes)
    end

    describe 'When #get to /api/habit_trees/nodes' do
      let(:response) { get '/api/habit_trees/nodes' }

      it 'Then returns status code 200' do
        expect(response.status).to eq 200
      end
    end

    describe 'When #get to /api/habit_trees/nodes/:id' do
      let(:response) { get "/api/habit_trees/nodes/#{habit_node_repo.ids.first}" }

      it 'Then returns correct status code' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it 'has json mime type in response header' do
          expect(response.header['Content-Type']).to eq 'application/json'
        end

        it 'returns the created json object' do
          expect(response.body).to be_json_eql(@habit_node.attributes.to_json)
        end
      end

      describe 'And has necessary attributes' do
        it 'has id attr' do
          expect(response.body).to have_json_path("id")
          expect(response.body).to have_json_type(Integer).at_path("id")
        end

        it 'has lft attr' do
          expect(response.body).to have_json_path("lft")
          expect(response.body).to have_json_type(Integer).at_path("lft")
        end

        it 'has rgt attr' do
          expect(response.body).to have_json_path("rgt")
          expect(response.body).to have_json_type(Integer).at_path("rgt")
        end
      end
    end
  end
end
