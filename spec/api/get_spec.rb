# frozen_string_literal: true

RSpec.describe 'get to /api/habit_trees' do
  it "says hello" do
    get '/api'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('Hello, world!')
  end
end
