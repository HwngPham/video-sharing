class Video < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :src, presence: true
  validates :desc, presence: true
end
