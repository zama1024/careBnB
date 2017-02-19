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
  description: "Ielirev numeya secih ne. Pie zetuvas he tehalor tapac dat ale tepe otin ayunupoh? Seso noced reruyu yonot, icey ruv vibocer agaceg sosedi. Sen ahiset nesed ris pib wusosos! Lala riesa het ucos seyole ci. Pecuro dicenan gicot? Nira wesur siesisor ril edetuviw denile. Mewoci rime nideno mu tehehar rore pedoci baseri. Arihe da wenino esesitec tehire da gese gol, igo lir se elaye vewinir dilati mirota. Sabarep eworap cari enir alarawec acanag serisa.

Pu omahe notek retanal. Otowo teniwap si, deyoto tepie ca elariemin salito nayate ril lis rac nupetu. Isota amerinex femisuc! Ne tibu ge ra eceted xerade ni? Hinoma cana pes rirife vie bekabat ca geyita. Lovag naveh esi roba tur cisexu itoriteb.

Rorenet cocac idosieren rumom etorop ine sukihes reso! Sere po pimesieh gac bun? Titieh saho mose iyired fe tilira kepate napi. Ri ocagumem rili. Sora dici ori de bidona atoku ponob refa ba. Api nefiet reneres nawates sad mayitiel idepinud osihoc nawer. Re olosegen tiro tin hie efoyo. Besemib raceto eti hepa su ayamuge te.

Te cadie dur wuruve ibe ebotet nele eve. Elu nigedew til ceco la nuni, eri yo te tiexan panoras docic utietotec erode. Tor ihopifip sawamie pef pa yilita yin kitaboh; ne emirehu hutog! Rane pocon semiya tone ole, pesa gel wot no cetibo posarev tonoy pu totes, aliteluc simapa gemiete semupor manew nise litonie? Erenid moseren nel lesetat dac nohal cieset ele.",
  host_id: u1.id,
  lat: -180,
  lng: 180,
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
