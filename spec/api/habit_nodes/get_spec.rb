# frozen_string_literal: true

RSpec.describe 'get to /api/habit_trees' do
  let(:response) { get '/api/habit_trees' }

  it 'should return json' do
    expect(response.headers['Content-Type']).to eq('application/json')
  end

  it 'returns the status 200' do
    expect(response.status).to eq 200
  end
end
