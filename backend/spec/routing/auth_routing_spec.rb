require 'rails_helper'

RSpec.describe AuthController do
  describe 'routing' do
    it 'routes to #register' do
      expect(post: 'auth/register').to route_to('auth#register')
    end

    it 'routes to #login' do
      expect(post: 'auth/login').to route_to('auth#login')
    end

    it 'routes to #logout' do
      expect(delete: 'auth/logout').to route_to('auth#logout')
    end
  end
end
