class AddDefaultAvatarUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :avatar_url, :string, default: "https://s3-us-west-2.amazonaws.com/shootr-dev/profile.svg"
  end
end
