class Video < ApplicationRecord
  belongs_to :user

  validates :src, presence: true
end
