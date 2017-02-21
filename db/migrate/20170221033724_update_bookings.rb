class UpdateBookings < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :num_guests, :integer
    add_column :bookings, :charity_org, :string
    add_index :bookings, :user_id
    add_index :bookings, :listing_id
  end
end
