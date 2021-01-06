# frozen_string_literal: true

RSpec.describe 'Feature: API root' do
  context 'Given existing habit_tree root' do
    before do
      # setup db
    end

    describe 'When post to /api' do
      let(:response) { post '/api' }

      describe 'Then returns correct status code' do
        it { expect(response.status).to eq 405 }
      end
    end
  end
end
