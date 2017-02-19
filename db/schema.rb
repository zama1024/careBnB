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

ActiveRecord::Schema.define(version: 20170219202300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "host_id",                                      null: false
    t.string  "title",               default: "",             null: false
    t.text    "description",         default: "",             null: false
    t.float   "lat",                 default: 37.09024,       null: false
    t.float   "lng",                 default: -95.712891,     null: false
    t.integer "daily_rate",          default: 0,              null: false
    t.integer "donation_percentage", default: 0,              null: false
    t.string  "address",             default: "",             null: false
    t.string  "city",                default: "",             null: false
    t.string  "listing_photo_url"
    t.integer "max_guests",          default: 1
    t.integer "num_bedroom",         default: 1
    t.string  "listing_type",        default: "Private Room"
    t.integer "listing_beds",        default: 1
    t.integer "num_bathroom",        default: 1
    t.string  "check_in",            default: "2PM"
    t.string  "check_out",           default: "12PM"
    t.string  "property_type",       default: "House"
    t.integer "service_fee",         default: 0
    t.integer "weekly_discount",     default: 0
    t.integer "monthly_discount",    default: 0
    t.index ["host_id"], name: "index_listings_on_host_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                        null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "fname",           default: ""
    t.string   "lname",           default: ""
    t.string   "profile_pic_url", default: ""
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
  end

end
