# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create!({email:"guest@email.com", password:"password", fname: "Joey", lname:"Tribbiani", profile_pic_url: "https://s-media-cache-ak0.pinimg.com/originals/99/e2/3f/99e23f41edfc1f46199433023a3db074.jpg"})
Listing.destroy_all
Listing.create!({  title: "Beautiful house in the heart of Houston",
  description: "Beautiful big house",
  host_id: u1.id,
  lat: -180,
  lng: 180,
  daily_rate: 20,
  donation_percentage: 20,
  address: "18343 Dusty Terrace Ln.",
  city: "Katy",
  listing_photo_url: "http://www.mrwallpaper.com/wallpapers/Luxury-Resort-Evening-851x315.jpg"})
