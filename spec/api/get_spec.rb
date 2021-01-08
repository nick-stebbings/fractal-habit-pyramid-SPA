# frozen_string_literal: true

RSpec.describe 'Feature: API root' do
  context 'Given db setup' do
    before do
      # perform actions
    end

    describe 'When get to /api' do
      let!(:response) { get '/api' }

      it 'Then returns status code 200' do
        expect(response.status).to eq 200
      end
    end
  end
end
