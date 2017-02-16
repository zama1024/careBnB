class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false, default: ""
      t.text :description, null: false, default: ""
      t.float :lat, null: false, default: 37.09024
      t.float :lng, null: false, default: -95.712891
      t.integer :daily_rate, null: false, default: 0
      t.integer :donation_percentage, null: false, default: 0
      t.string :address, null: false, default: ""
      t.string :city, null: false, default: ""
      t.string :listing_photo_url
    end
    add_index :listings, :host_id
  end
end
