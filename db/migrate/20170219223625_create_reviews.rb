class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :accuracy_rating, default: 0
      t.integer :communication_rating, default: 0
      t.integer :cleanliness_rating, default: 0
      t.integer :location_rating, default: 0
      t.integer :checkin_rating, default: 0
      t.integer :value_rating, default: 0
      t.text :description, default: ""
      t.integer :review_helpfulness, default: 0
      t.integer :listing_id, null: false
      t.timestamps
    end
    add_index :reviews, :listing_id
  end
end
