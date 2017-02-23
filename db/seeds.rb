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
l1 = Listing.create!({  title: "Beautiful house in the heart of Houston",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
  host_id: u1.id,
  lat: 29.716131,
  lng: -95.388718,
  daily_rate: 20,
  donation_percentage: 20,
  address: "18343 Dusty Terrace Ln.",
  city: "Katy",
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
l4 = Listing.create!({  title: "Beautiful house in the heart of Houston",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
  host_id: u1.id,
  lat: 40.730610,
  lng: 73.935242,
  daily_rate: 20,
  donation_percentage: 20,
  address: "Flushing",
  city: "New York",
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
l2 = Listing.create!({  title: "Beautiful house in the heart of Houston",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
  host_id: u1.id,
  lat: 37.773972,
  lng: -122.431297,
  daily_rate: 20,
  donation_percentage: 20,
  address: "18343 Dusty Terrace Ln.",
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
l3 = Listing.create!({  title: "Beautiful house in the heart of Houston",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
  host_id: u1.id,
  lat: 47.608013,
  lng: -122.335167,
  daily_rate: 20,
  donation_percentage: 20,
  address: "18343 Dusty Terrace Ln.",
  city: "Seattle",
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

Review.destroy_all
Review.create!({
  accuracy_rating: 4,
  communication_rating: 5,
  cleanliness_rating: 4,
  location_rating: 5,
  checkin_rating: 4,
  value_rating: 3,
  description: "Setapie ne nir cupalom. Tog rotaral conew, vi sacera derar ye. Digaba digeyop kadolim! Ciey reroy miti iebip elera le zaxitid otitunah ba. Xaxiegie idil dogep useses areni vicace neparen, ocekocal oday yo ni row vel abise selim hi sobik. Oyetelay cec teli riesi. Peser eca unietosa depe rive.",
  review_helpfulness: 0,
  listing_id: l1.id,
  author_id: u1.id
  })

Review.create!({
  accuracy_rating: 4,
  communication_rating: 5,
  cleanliness_rating: 4,
  location_rating: 5,
  checkin_rating: 4,
  value_rating: 3,
  description: "Rienag cipen no lireper ro nequp. Lepugi ciebe tabit tolena docetum gusero nila. Data topudam daware sine nale dipenat aca, enece vubihi lopihien! Tiera lalasa ucin ranal.",
  review_helpfulness: 0,
  listing_id: l1.id,
  author_id: u1.id
})
