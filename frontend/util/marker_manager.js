export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(listings) {
    let myListings = Object.keys(listings)
    myListings.pop();
    this.listings = myListings.map(id => listings[id]);
    this._listingsToAdd().forEach(this._createMarkerFromListing.bind(this));
    console.log('time to update');
  }
  _listingsToAdd() {
    debugger
    const currentListings = this.markers.map( marker => marker.listingId );
    return this.listings.filter( listing => !currentListings.includes(listing.id) );
  }
  _createMarkerFromListing(listing) {
   const pos = new google.maps.LatLng(listing.lat, listing.lng);
   const marker = new google.maps.Marker({
     position: pos,
     map: this.map,
     listingId: listing.id
   });
   marker.addListener('click', () => this.handleClick(listing));
   this.markers.push(marker);
 }
}
