# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given a persisted domain tuple' do
    let(:domain_repo) { Hht::Repos::DomainRepo.new }
    before do
      domain_repo.create( name: 'A domain',
                          description: 'A description',
                          rank: 1,
                          hashtag: '#this')
    end

    describe 'When get to /api/domains' do
      let(:response) { get '/api/domains' }

      describe 'Then returns status code 200' do
        it { expect(response.status).to eq 200 }
      end

      describe 'And returns json' do
        it { expect(response.body).to have_json_type }
      end
    end
  end
end
