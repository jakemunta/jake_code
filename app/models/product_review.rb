class ProductReview < ActiveRecord::Base
  belongs_to :product
  belongs_to :user

  RATING = {1 => 'Poor', 2 => 'OK', 3 => 'Good', 4 => 'Excelent', 5 => 'I Love It'}
end
