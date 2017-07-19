class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :img_url, null: false
      t.references :user, foreign_key: true, null: false
      t.text :caption
      t.string :location

      t.timestamps
    end
  end
end
