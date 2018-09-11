class AddColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column_default :users, :avatar_url , from: "https://s3-us-west-2.amazonaws.com/shootr-dev/profile.svg" , to: "https://s3-us-west-1.amazonaws.com/instacram/profile.svg"
  end
end
