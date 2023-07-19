class User < ApplicationRecord
  has_many :videos, dependent: :destroy

  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, length: { in: 6...20 }
end
