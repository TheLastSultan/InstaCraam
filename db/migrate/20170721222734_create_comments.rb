class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :post_id, null: false

      t.timestamps
    end

    add_index :comments, :post_id
  end
end
