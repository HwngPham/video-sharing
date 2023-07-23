require 'rails_helper'

RSpec.describe VideosController do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/videos').to route_to('videos#index')
    end

    it 'routes to #show' do
      expect(get: 'api/videos/1').to route_to('videos#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: 'api/videos').to route_to('videos#create')
    end
  end
end
