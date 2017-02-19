class ReupdateListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :service_fee, :integer, default: 0
    add_column :listings, :weekly_discount, :integer, default: 0
    add_column :listings, :monthly_discount, :integer, default: 0
  end
end
