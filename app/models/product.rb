class Product < ActiveRecord::Base

  has_many :reviews
  has_many :users, through: :reviews

  validates :description, :name, :price_in_cents, presence: true
end
