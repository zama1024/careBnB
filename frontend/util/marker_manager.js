export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(listings) {
    let myListings = Object.keys(listings);
    myListings.pop();
    this.listings = myListings.map(id => listings[id]);
    this._listingsToAdd().forEach(this._createMarkerFromListing.bind(this));
    this._markersToRemove(myListings).forEach(this._removeMarker.bind(this));
  }
  // removeMarkers(listings){
  //
  //   this.markers.forEach(marker => {
  //     if (!listings.some((listing) => {return parseInt(listing) === marker.listingId;})) {
  //       marker.setMap(null);
  //     }
  //   });
  // }

  _markersToRemove(listings) {
    const currentListings = listings.map((listing) => parseInt(listing));
    return this.markers.filter(marker => !currentListings.includes(marker.listingId));
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    marker.setMap(null);
    this.markers.splice(idx, 1);
  }


  _listingsToAdd() {
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
  //  marker.addListener('click', () => this.handleClick(listing));
   this.markers.push(marker);
 }
}
