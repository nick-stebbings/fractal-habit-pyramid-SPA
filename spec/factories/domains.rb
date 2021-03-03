# frozen_string_literal: true

Factory.define(:domain) do |f|
  # f.sequence(:id) { |n| n }
  f.name Faker::Name.unique.name
  f.description Faker::ChuckNorris.fact
  f.sequence(:rank) { |n| n }
  f.hashtag "##{Faker::Coffee.intensifier}"
end
