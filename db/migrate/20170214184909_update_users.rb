class UpdateUsers < ActiveRecord::Migration[5.0]
  def change
      remove_column :users, :fname
      remove_column :users, :lname
      remove_column :users, :profile_pic_url
      add_column :users, :fname, :string, default: ""
      add_column :users, :lname, :string, default: ""
      add_column :users, :profile_pic_url, :string, default: ""
  end

end
