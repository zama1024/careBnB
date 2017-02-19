class UpdateListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :max_guests, :integer, default: 1
    add_column :listings, :num_bedroom, :integer, default: 1
    add_column :listings, :listing_type, :string, default: "Private Room"
    add_column :listings, :listing_beds, :integer, default: 1
    add_column :listings, :num_bathroom, :integer, default: 1
    add_column :listings, :check_in, :string, default: "2PM"
    add_column :listings, :check_out, :string, default: "12PM"
    add_column :listings, :property_type, :string, default: "House"
  end
end
