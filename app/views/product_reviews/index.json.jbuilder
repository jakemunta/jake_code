json.array!(@product_reviews) do |product_review|
  json.extract! product_review, :id, :rating, :product_id, :user
  json.url product_review_url(product_review, format: :json)
end
