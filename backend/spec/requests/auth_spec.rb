require 'rails_helper'

RSpec.describe '/auth' do
  describe 'POST /register' do
    before :all do
      User.delete_all
    end

    describe 'when user is already existed' do
      it 'returns forbidden' do
        User.create!(email: 'foobar@eg.com', password: 'foobar')

        post '/auth/register',
             params: { email: 'foobar@eg.com', password: 'foobar' }

        expect(response).to have_http_status :forbidden
        expect(User.count).to eq 1
      end
    end

    describe 'when user is not existed' do
      before :all do
        post '/auth/register',
             params: { email: 'foobar@eg.com', password: 'foobar' }
      end

      it 'creates a new user and returns the detail' do
        expect(response).to have_http_status :created
        expect(User.count).to eq 1
        expect(response.body).to eq({ message: User.first }.to_json)
      end

      it 'logs user in' do
        expect(session[:current_user_id]).to eq(User.first.id)
      end
    end
  end

  describe 'POST /login' do
    before :all do
      User.delete_all
    end

    let(:user) { User.create!(email: 'logmein@email.com', password: 'foobar') }

    describe 'when invalid email or password' do
      it 'does not log user in' do
        post '/auth/login',
             params: { email: user.email, password: '' }

        expect(response).to have_http_status :unauthorized
        expect(session[:current_user_id]).to be_nil
      end
    end

    describe 'when valid email and password' do
      it 'logs user in' do
        post '/auth/login',
             params: { email: user.email, password: user.password }

        expect(response).to have_http_status :ok
        expect(session[:current_user_id]).to be user.id
      end
    end
  end
end
