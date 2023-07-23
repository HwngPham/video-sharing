require 'rails_helper'

RSpec.describe Video do
  let(:video) { Video.new(src: 'https://youtubelink.com', user: User.new) }

  it 'is valid with valid attributes' do
    expect(video).to be_valid
  end

  it 'is invalid with blank src' do
    video.src = ''
    expect(video).not_to be_valid
  end

  it 'is invalid with incorrect url format' do
    video.src = 'incorrect_link'
    expect(video).not_to be_valid
  end

  it 'is invalid without an associated user' do
    video.user = nil
    expect(video).not_to be_valid
  end
end
