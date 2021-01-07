# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given a valid domain json' do
    let(:domain_repo) { Hht::Repos::DomainRepo.new }
    let(:resource) { JSON.load response.body }

    before do
      @domain = valid_domain
      @domain_id = @domain.attributes[:id]
      @domain_as_json = @domain.attributes.to_json
    end

    describe 'When #post to /api/domains' do
      let(:response) { post('/api/domains', @domain_as_json) }

      describe 'Then returns status code 201' do
        it { expect(response.status).to eq 201 }
      end

      describe 'And it persisted the domain json' do
        it do
          response
          expect(domain_repo.as_json(@domain_id)).to eq (parse_json @domain_as_json)
        end
      end
    end
  end
end
