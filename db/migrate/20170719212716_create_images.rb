class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :img_url
      t.references :user_id, foreign_key: true
      t.text :caption
      t.string :location

      t.timestamps
    end
  end
end
