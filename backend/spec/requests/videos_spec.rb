require 'rails_helper'

RSpec.describe '/videos', type: :request do
  describe 'GET /index' do
    it 'renders a successful response' do
      user = User.create! email: 'foobar@eg.com', password: 'foobar'
      Video.create! src: 'https://youtu.be/7lVE9BQENGg', user: user
      Video.create! src: 'https://youtu.be/7lVE9BQENGg', user: user
      get '/api/videos', as: :json
      expect(JSON.parse(response.body)).to eq(Video.all.as_json)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    before {
      user = User.create! email: 'foobar@eg.com', password: 'foobar'
      allow_any_instance_of(VideosController).to receive(:current_user) do
        user
      end 
    }

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
