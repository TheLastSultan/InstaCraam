class AddDefaultAvatarUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :avatar_url, :string, default: "http://res.cloudinary.com/norriskwan/image/upload/v1500518554/profile_bhxtpb.svg"
  end
end
