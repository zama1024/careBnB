class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps null: false

    end
  end
end
