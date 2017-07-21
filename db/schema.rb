# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170721222734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.string   "img_url",    null: false
    t.integer  "user_id",    null: false
    t.text     "caption"
    t.string   "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_images_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                     null: false
    t.string   "password_digest",                                                                                              null: false
    t.string   "session_token",                                                                                                null: false
    t.string   "avatar_url",      default: "http://res.cloudinary.com/norriskwan/image/upload/v1500518554/profile_bhxtpb.svg"
    t.text     "description"
    t.datetime "created_at",                                                                                                   null: false
    t.datetime "updated_at",                                                                                                   null: false
    t.string   "fullname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  add_foreign_key "images", "users"
end
