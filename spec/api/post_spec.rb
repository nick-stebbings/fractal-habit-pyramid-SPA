# frozen_string_literal: true

RSpec.describe 'Feature: API root' do
  context 'Given existing habit_tree root' do
    before do
      # setup db
    end

    describe 'When post to /api' do
      let!(:response) { post '/api' }

      it 'Then returns correct status code' do
        expect(response.status).to eq 405
      end
    end
  end
end
