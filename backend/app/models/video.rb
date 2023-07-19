class Video < ApplicationRecord
  belongs_to :user

  validates :src, presence: true, format: {
    with: %r{(https://www\.|http://www\.|https://|http://)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?/[a-zA-Z0-9]{2,}|((https://www\.|http://www\.|https://|http://)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https://www\.|http://www\.|https://|http://)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?},
    message: 'Invalid URL'
  }
end
