require 'rails_helper'

RSpec.describe '/videos' do
  describe 'GET /index' do
    before do
      user = User.create! email: 'foobar@eg.com', password: 'foobar'
      Video.create! src: 'https://youtu.be/7lVE9BQENGg', user: user
      Video.create! src: 'https://youtu.be/7lVE9BQENGg', user: user
    end

    it 'renders a successful response' do
      get '/api/videos', as: :json
      expect(response.parsed_body).to eq({ message: Video.all }.as_json)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    before do
      user = User.create! email: 'foobar@eg.com', password: 'foobar'
      allow_any_instance_of(VideosController).to receive(:current_user) do
        user
      end
    end

    context 'with valid src attribute' do
      it 'creates a new Video' do
        post videos_url,
             params: { src: 'https://youtu.be/7lVE9BQENGg' }, as: :json
        expect(response).to have_http_status(:created)
        expect(Video.count).to eq(1)
      end
    end

    context 'with invalid src attribute' do
      it 'does not create a new Video' do
        post videos_url,
             params: { video: 'http' }, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
        expect(Video.count).to eq(0)
      end
    end
  end
end
