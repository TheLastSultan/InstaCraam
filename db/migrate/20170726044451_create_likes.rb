class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.string :likable_type, null: false
      t.integer :likable_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
    end
    add_index :likes, [:likable_type, :likable_id, :liker_id], unique: true
  end
end
