class CreateProductReviews < ActiveRecord::Migration
  def change
    create_table :product_reviews do |t|
      t.integer :rating
      t.belongs_to :product, index: true
      t.belongs_to :user, index: true
      t.text :review

      t.timestamps
    end
  end
end
