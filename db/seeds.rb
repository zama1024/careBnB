# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create!({email:"guest@email.com", password:"password", fname: "Joey", lname:"Tribbiani", profile_pic_url: "https://s-media-cache-ak0.pinimg.com/originals/99/e2/3f/99e23f41edfc1f46199433023a3db074.jpg"})
u2 = User.create!({email:"rachel@email.com", password:"password", fname: "Rachel", lname:"Green", profile_pic_url: "http://pixel.nymag.com/imgs/daily/vulture/2014/12/17/17-rachel-green-jewish.w750.h560.2x.jpg"})
u3 = User.create!({email:"ross@email.com", password:"password", fname: "Ross", lname:"Geller", profile_pic_url: "http://cdn.playbuzz.com/cdn/34c57547-2966-4c41-958d-bd8600a4d9ac/d6cb762e-5493-4e09-bd86-8137fc953d8d.jpg"})
u4 = User.create!({email:"monica@email.com", password:"password", fname: "Monica", lname:"Geller", profile_pic_url: "http://images5.fanpop.com/image/photos/31600000/Monica-s-big-blue-eyes-monica-geller-31643935-500-375.jpg"})
u4 = User.create!({email:"chandler@email.com", password:"password", fname: "Chandler", lname:"Bing", profile_pic_url: "http://az616578.vo.msecnd.net/files/2016/11/06/6361405415176770181565499140_chandler%20bing.jpg"})
u4 = User.create!({email:"phoebe@email.com", password:"password", fname: "Phoebe", lname:"Buffay", profile_pic_url: "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"})
Listing.destroy_all
l1 = Listing.create!({  title: "Beautiful house in a great city!",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
l9 = Listing.create!({  title: "Cozy apartmenrt in Amsterdam",
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
    description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

  Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

  Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

  Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
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
  l14 = Listing.create!({  title: "Great house in San Francisco!",
    description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

  Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

  Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

  Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
    host_id: u1.id,
    lat: 37.780024,
    lng: -122.429399,
    daily_rate: 200,
    donation_percentage: 20,
    address: "18343 Lombard St.",
    city: "San Francisco",
    listing_photo_url: "https://s-media-cache-ak0.pinimg.com/originals/96/2a/66/962a66c8feca616e5ba0399f62ae5424.jpg",
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
  author_id: u2.id
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
  author_id: u3.id
})
Review.create!({
  accuracy_rating: 4,
  communication_rating: 5,
  cleanliness_rating: 4,
  location_rating: 5,
  checkin_rating: 4,
  value_rating: 3,
  description: "Setapie ne nir cupalom. Tog rotaral conew, vi sacera derar ye. Digaba digeyop kadolim! Ciey reroy miti iebip elera le zaxitid otitunah ba. Xaxiegie idil dogep useses areni vicace neparen, ocekocal oday yo ni row vel abise selim hi sobik. Oyetelay cec teli riesi. Peser eca unietosa depe rive.",
  review_helpfulness: 0,
  listing_id: l2.id,
  author_id: u2.id
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
  listing_id: l2.id,
  author_id: u4.id
})
Review.create!({
  accuracy_rating: 4,
  communication_rating: 5,
  cleanliness_rating: 4,
  location_rating: 5,
  checkin_rating: 4,
  value_rating: 3,
  description: "Setapie ne nir cupalom. Tog rotaral conew, vi sacera derar ye. Digaba digeyop kadolim! Ciey reroy miti iebip elera le zaxitid otitunah ba. Xaxiegie idil dogep useses areni vicace neparen, ocekocal oday yo ni row vel abise selim hi sobik. Oyetelay cec teli riesi. Peser eca unietosa depe rive.",
  review_helpfulness: 0,
  listing_id: l3.id,
  author_id: u5.id
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
  listing_id: l3.id,
  author_id: u6.id
})
Review.create!({
  accuracy_rating: 4,
  communication_rating: 5,
  cleanliness_rating: 4,
  location_rating: 5,
  checkin_rating: 4,
  value_rating: 3,
  description: "Setapie ne nir cupalom. Tog rotaral conew, vi sacera derar ye. Digaba digeyop kadolim! Ciey reroy miti iebip elera le zaxitid otitunah ba. Xaxiegie idil dogep useses areni vicace neparen, ocekocal oday yo ni row vel abise selim hi sobik. Oyetelay cec teli riesi. Peser eca unietosa depe rive.",
  review_helpfulness: 0,
  listing_id: l3.id,
  author_id: u6.id
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
  listing_id: l4.id,
  author_id: u2.id
})
