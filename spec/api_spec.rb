# frozen_string_literal: true

RSpec.describe 'Api' do
  def app
    Hht::Api
  end

  # it "says hello" do
  #   get '/api/'
  #   expect(last_response).to be_ok
  #   expect(last_response.body).to eq('Hello, world!')
  # end

  context 'post to /api' do
    let(:response) { post '/api' }

    it { expect(response.status).to eq 405 }
  end

  context 'get to /api/habit_trees' do
    let(:response) { get '/api/habit_trees' }

    it 'should return json' do
      expect(response.headers['Content-Type']).to eq('application/json')
    end

    it 'returns the status 200' do
      expect(response.status).to eq 200
    end
  end

  # it "should return json" do
  #   get '/habit_trees/1'
  #   expect(last_response.headers['Content-Type']).to eq('application/json')
  # end

  # it "should say that 2 is prime" do
  #   assert 2.prime?
  # end

  # it "should say that 10 is not prime" do
  #   refute 10.prime?
  # end

  # it "should return the correct info about 6 as json" do
  #   get '/6'
  #   six_info = { number: 6, factors: 6.factors, odd: 6.odd?, even: 6.even?, prime: 6.prime? }
  #   six_info.to_json.must_equal last_response.body
  # end
end
