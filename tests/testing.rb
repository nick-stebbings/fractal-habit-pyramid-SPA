# testing.rb
ENV['RACK_ENV'] = 'test'

require 'bundler/setup'
require 'minitest/autorun'
require 'rack/test'
require 'minitest/reporters'

Minitest::Reporters.use!
include Rack::Test::Methods
require_relative '../system/boot'

def app
  Hht::Api
end

describe "Habit Trees" do

  it "should return root tree as json" do
    get '/habit_trees'
    _(last_response.headers['Content-Type']).must_equal 'application/json;charset=utf-8'
  end 

  it "should return subtrees as json" do
    get '/habit_trees/1'
    _(last_response.headers['Content-Type']).must_equal 'application/json;charset=utf-8'
  end 

  it "should return the factors of 6" do
    6.factors.must_equal [1,2,3,6]
  end

  it "should say that 2 is prime" do
    assert 2.prime?
  end

  it "should say that 10 is not prime" do
    refute 10.prime?
  end

  it "should return the correct info about 6 as json" do
    get '/6'
    six_info = { number: 6, factors: 6.factors, odd: 6.odd?, even: 6.even?, prime: 6.prime? }
    six_info.to_json.must_equal last_response.body
  end

end
