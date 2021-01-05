# frozen_string_literal: true

RSpec.describe 'post to /api' do
  context 'post to /api' do
    let(:response) { post '/api' }

    it { expect(response.status).to eq 405 }
  end
end
