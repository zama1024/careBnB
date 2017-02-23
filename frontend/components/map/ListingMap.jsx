import React from 'react';
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {

  componentDidMount() {
    let lat;
    let lng;
    if (this.props.listings.map_center){
      lat = this.props.listings.map_center[0];
      lng = this.props.listings.map_center[1];
    }else{
      lat = 37.0902;
      lng = 95.7129;
    }
    const mapOptions = {
     center: { lat: lat, lng: lng }, // this is SF
     zoom: 13
   };
   this.map = new google.maps.Map(this.mapNode, mapOptions);
   this.MarkerManager = new MarkerManager(this.map);
   this.MarkerManager.updateMarkers(this.props.listings);
  }
  render(){
    if (this.MarkerManager && this.props.listing){
      this.MarkerManager.updateMarkers(this.props.listings);
    }
    return(
      <div id='map-container' ref ={ map => this.mapNode = map }></div>
    );
  }
}
export default ListingMap;
