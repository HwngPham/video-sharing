class User < ApplicationRecord
  has_many :videos, dependent: :destroy
end
