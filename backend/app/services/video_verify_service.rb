class VideoVerifyService
  include HTTParty

  def initialize(url)
    @url = url
    @base_uri = 'https://www.youtube.com/oembed?url='
  end

  def verify
    res = HTTParty.get "#{@base_uri}#{@url}&format=json"

    return JSON.parse res.body if res.code == 200
  end
end
