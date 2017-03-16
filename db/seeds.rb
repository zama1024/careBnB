# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
users = [];
users << u1 = User.create!({email:"guest@email.com", password:"password", fname: "Farshid", lname:"Zaman", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/farshid.jpg"})
users << u2 = User.create!({email:"saima@email.com", password:"password", fname: "Saima", lname:"Rahman", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/saima.jpg"})
users << u3 = User.create!({email:"ahmed@email.com", password:"password", fname: "Ahmed", lname:"Tahsin", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/ahmed.jpg"})
users << u4 = User.create!({email:"alex@email.com", password:"password", fname: "Alex", lname:"Hsu", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/alex.jpg"})
users << u5 = User.create!({email:"monica@email.com", password:"password", fname: "Monica", lname:"Rodriguez", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/ashfi.jpg"})
users << u6 = User.create!({email:"austin@email.com", password:"password", fname: "Austin", lname:"Windom", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/austin.jpg"})
users << u7 = User.create!({email:"asif@email.com", password:"password", fname: "Asif", lname:"Sayeed", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/asif.jpg"})
users << u8 = User.create!({email:"michael@email.com", password:"password", fname: "Michael", lname:"Barrera", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/michael.jpg"})
users << u9 = User.create!({email:"rasha@email.com", password:"password", fname: "Rasha", lname:"Haq", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/rasha.jpg"})
users << u10 = User.create!({email:"william@email.com", password:"password", fname: "William", lname:"Blair", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/razot.jpg"})
users << u11 = User.create!({email:"reyes@email.com", password:"password", fname: "William", lname:"Blair", profile_pic_url: "https://s3.amazonaws.com/carebnb-photos/userPhotos/reyes.jpg"})
Listing.destroy_all
listingPhotos = ["https://s3.amazonaws.com/carebnb-photos/listingPhotos/1.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/10.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/11.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/12.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/13.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/14.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/2.jpg","https://s3.amazonaws.com/carebnb-photos/listingPhotos/3.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/4.png", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/5.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/6.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/7.jpg", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/8.png", "https://s3.amazonaws.com/carebnb-photos/listingPhotos/9.jpg"]

listingTitle = ["Beautiful house in a great city!", "Not like any other house", "Great apartment for tourists", "Very welcoming house", "Cozy apartment", "Best place to stay for tourists", "Great apartment for less money"]
listingDescription = ["Bathroom and Kitchen are mindfully shared within this 3 bedroom apt.
All bedrooms are completely private key lock.
This is a strict 'leave No trace' environment. especially in Bathroom users will find a spotless clean tub/shower, sink & toilet.", "Soulful cottage keeps you in the heart of it all, while giving you total privacy and quiet. We designed it to be a warm and bright retreat from the hustle of everyday life. It really feels remote and peaceful, and yet it's minutes away from the heart of the city."]
l1 = Listing.create!({  title: "Beautiful house in a great city!",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 37.780024,
  lng: -122.429399,
  daily_rate: 200,
  donation_percentage: 20,
  address: "18343 Lombard St.",
  city: "San Francisco",
  listing_photo_url: "http://www.mrwallpaper.com/wallpapers/Luxury-Resort-Evening-851x315.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l4 = Listing.create!({  title: "Not like any other house",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 37.666415,
  lng: -122.442041,
  daily_rate: 120,
  donation_percentage: 20,
  address: "Lombard Street",
  city: "San Francisco",
  listing_photo_url: "https://images1.apartments.com/i2/MwWwySSyzJ83FDrJhgMAi8EMoj4dLKcufFHKoNB6fvI/117/houston-house-houston-tx-building-photo.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l2 = Listing.create!({  title: "Great apartment in SF",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 37.793972,
  lng: -122.431297,
  daily_rate: 20,
  donation_percentage: 20,
  address: "Lombard Street",
  city: "San Francisco",
  listing_photo_url: "http://ww1.hdnux.com/photos/30/63/52/6503080/6/920x920.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l3 = Listing.create!({  title: "Cozy New York Apartment",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 40.730610,
  lng: -73.935242,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Flushing",
  city: "New York",
  listing_photo_url: "http://cdn.freshome.com/wp-content/uploads/2015/08/viktoria-seattle.png",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l5 = Listing.create!({  title: "Small Rome apartment",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 41.890251,
  lng: 12.492373,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Italy",
  city: "Rome",
  listing_photo_url: "http://www.navonapt.com/flash/11.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l6 = Listing.create!({  title: "Room for three in Rome",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 42.890251,
  lng: 13.492373,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Italy",
  city: "Rome",
  listing_photo_url: "http://www.justigo.in/imagesa/it/flavia-rooftop-apartments-hotels-italy-rome-area-via-veneto-315451_133316orjxm.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l7 = Listing.create!({  title: "Great apartment for tourists in paris",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 48.864716,
  lng: 2.349014,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Paris",
  city: "France",
  listing_photo_url: "https://www.parisperfect.com/g/hero-images/home/margaux-eiffel-1920x880.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l8 = Listing.create!({  title: "Very welcoming house in paris",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 48.858093,
  lng: 2.294694,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Paris",
  city: "France",
  listing_photo_url: "http://homesoftherich.net/wp-content/uploads/2013/07/Screen-shot-2013-07-02-at-11.19.28-AM.png",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l9 = Listing.create!({  title: "Cozy apartment in Amsterdam",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 52.379189,
  lng: 4.899431,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Netherland",
  city: "Amsterdam",
  listing_photo_url: "https://s-media-cache-ak0.pinimg.com/originals/80/35/5d/80355d199e1cd40a1296e1f1a0f6f04b.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l10 = Listing.create!({  title: "One bedroom apartment in mumbai",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 19.228825,
  lng: 72.854118,
  daily_rate: 250,
  donation_percentage: 20,
  address: "India",
  city: "Mumbai",
  listing_photo_url: "http://www.grandresidency.com/img/room_photo/grand-residency-bandra-one-bedroom-apartment-queen-sized-bed.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l11 = Listing.create!({  title: "Small apartment for tourists in London",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 51.508530,
  lng: -0.076132,
  daily_rate: 250,
  donation_percentage: 20,
  address: "England",
  city: "London",
  listing_photo_url: "https://www.central-london-apartments.com/img/pages/about/central-london-serviced-apartments-about-us.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
l12 = Listing.create!({  title: "Great house for tourists in barcelona",
  description: listingDescription.sample,
  host_id: u1.id,
  lat: 41.390205,
  lng: 2.154007,
  daily_rate: 250,
  donation_percentage: 20,
  address: "Spain",
  city: "Barcelona",
  listing_photo_url: "http://demo1.wpresidence.net/wp-content/uploads/2014/05/house-1.jpg",
  max_guests: 3,
  num_bedroom: 2,
  listing_type: "Private Room",
  listing_beds: 2,
  num_bathroom: 1,
  check_in: "2PM",
  check_out: "12PM",
  property_type: "House",
  service_fee: 8,
  weekly_discount: 10,
  monthly_discount: 15
  })
  l13 = Listing.create!({  title: "Beautiful house in San Francisco!",
    description: listingDescription.sample,
    host_id: u1.id,
    lat: 37.780024,
    lng: -122.429399,
    daily_rate: 200,
    donation_percentage: 20,
    address: "18343 Lombard St.",
    city: "San Francisco",
    listing_photo_url: "https://s-media-cache-ak0.pinimg.com/originals/9d/ed/f4/9dedf4e0959799d7e05ea269c388b5aa.jpg",
    max_guests: 3,
    num_bedroom: 2,
    listing_type: "Private Room",
    listing_beds: 2,
    num_bathroom: 1,
    check_in: "2PM",
    check_out: "12PM",
    property_type: "House",
    service_fee: 8,
    weekly_discount: 10,
    monthly_discount: 15
    })
    def create_listing(users, listingTitle, listingDescription, listingPhotos, lat, lng)
      listing = {  title: listingTitle.sample,
        description: listingDescription.sample,
        host_id: users.sample.id,
        lat: lat,
        lng: lng,
        daily_rate: rand(20..800),
        donation_percentage: rand(20..50),
        address: "new york",
        city: "new york",
        listing_photo_url: listingPhotos.sample,
        max_guests: rand(0..6),
        num_bedroom: (0..4),
        listing_type: ["Private Room", "Shared Room", "Entire Apartment"].sample,
        listing_beds: rand(0..3),
        num_bathroom: rand(0..3),
        check_in: "2PM",
        check_out: "12PM",
        property_type: ["House", "Apartment", "Condo"].sample,
        service_fee: rand(0..10),
        weekly_discount: rand(0..10),
        monthly_discount: rand(0..15)
      }
      if listing[:lat] == 0
        listing[:lat] = rand * 48
        listing[:lng] = ( (-1) * rand * 124)
        while listing[:lat] > 48 || listing[:lat] < 26 do
          listing[:lat] = rand * 48
        end
        while listing[:lng] > -77 || listing[:lat] < -124 do
          listing[:lng] = ( (-1) * rand * 124)
        end
      else
        listing[:lat] += rand/10
        listing[:lng] -= rand/10
      end
      listing[:address] = Geocoder.address([listing[:lat], listing[:lng]])
      if listing[:address] == nil
        listing[:address] = "new york"
        listing[:city] = "new york"
        listing[:lat] = 40.71 + rand/10
        listing[:lng] = -73.78 - rand/10
      else
        address = listing[:address].split(", ")
        listing[:city] = listing[:address].split(", ")[1] || "new york"
        listing[:city] = "new york" if address[-2] && address[-2].split(" ")[0] == "NY"
      end
      Listing.create!(listing)
    end
  20.times do |i|
    sleep(1.seconds)
    create_listing(users,listingTitle, listingDescription, listingPhotos, 0, 0)
  end
  15.times do |i|
    sleep(1.seconds)
    create_listing(users,listingTitle, listingDescription, listingPhotos, 40.68, -73.89)
  end
  15.times do |i|
    sleep(1.seconds)
    create_listing(users,listingTitle, listingDescription, listingPhotos, 37.74, -122.44)
  end

Review.destroy_all
def create_review
  reviews = ["It was the best home. Nice modern apartment with fully equipped kitchen. Loved the terrace. It was very nice location where about 10-15 walk away to Mercado municipal, bom ritero, downtown, se cathedral. We love this apartment and he gave us all the answers we asked. :)
    ", "Great place. Economical and excellent for the savvy traveler. Internet was very fast and if your creative with some weights you can get a good calesthetic workout in on the pool deck. Close to a market district which is nice. Coffee shop right beside the entrance of the building. Convenient.", "The location was nice. The apartment was clean and accurate to the photos and description. The host wasn't as responsive as other carebnb hosts have been in my experience.","Ótimo apartamento!! This apartment is near by subway, safe and good location to go other place. The owner was very kindly.", "Excellent from start to finish. Great host and the space was amazing, very modern and unique. Would definitely stay again.", "Had a great four week stay here. It's a nice and modern apartment with everything you'd expect (washer/dryer/dishwasher/TV). Everything I needed during my stay was in walking distance and Phillip was a great host.
    Overall, highly recommended!"]
  review = {
    accuracy_rating: rand(1..5),
    communication_rating: rand(1..5),
    cleanliness_rating: rand(1..5),
    location_rating: rand(1..5),
    checkin_rating: rand(1..5),
    value_rating: rand(1..5),
    description: reviews.sample,
    review_helpfulness: 0,
    listing_id: Listing.all.sample.id,
    author_id: User.all.sample.id
    }
  Review.create!(review)
end
150.times do |i|
  create_review
end
