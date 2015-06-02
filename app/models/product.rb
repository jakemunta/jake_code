class Product < ActiveRecord::Base
  has_many :product_reviews
  validates_presence_of :title, :description
end
