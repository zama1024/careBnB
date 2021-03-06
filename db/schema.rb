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

ActiveRecord::Schema.define(version: 20170222150411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "listing_id",  null: false
    t.date     "start_date",  null: false
    t.date     "end_date",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "num_guests"
    t.string   "charity_org"
    t.index ["listing_id"], name: "index_bookings_on_listing_id", using: :btree
    t.index ["user_id"], name: "index_bookings_on_user_id", using: :btree
  end

  create_table "listings", force: :cascade do |t|
    t.integer  "host_id",                                      null: false
    t.string   "title",               default: "",             null: false
    t.text     "description",         default: "",             null: false
    t.float    "lat",                 default: 37.09024,       null: false
    t.float    "lng",                 default: -95.712891,     null: false
    t.integer  "daily_rate",          default: 0,              null: false
    t.integer  "donation_percentage", default: 0,              null: false
    t.string   "address",             default: "",             null: false
    t.string   "city",                default: "",             null: false
    t.string   "listing_photo_url"
    t.integer  "max_guests",          default: 1
    t.integer  "num_bedroom",         default: 1
    t.string   "listing_type",        default: "Private Room"
    t.integer  "listing_beds",        default: 1
    t.integer  "num_bathroom",        default: 1
    t.string   "check_in",            default: "2PM"
    t.string   "check_out",           default: "12PM"
    t.string   "property_type",       default: "House"
    t.integer  "service_fee",         default: 0
    t.integer  "weekly_discount",     default: 0
    t.integer  "monthly_discount",    default: 0
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["host_id"], name: "index_listings_on_host_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "accuracy_rating",      default: 0
    t.integer  "communication_rating", default: 0
    t.integer  "cleanliness_rating",   default: 0
    t.integer  "location_rating",      default: 0
    t.integer  "checkin_rating",       default: 0
    t.integer  "value_rating",         default: 0
    t.text     "description",          default: ""
    t.integer  "review_helpfulness",   default: 0
    t.integer  "listing_id",                        null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "author_id",                         null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", using: :btree
    t.index ["listing_id"], name: "index_reviews_on_listing_id", using: :btree
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
