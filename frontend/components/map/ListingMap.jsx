import React from 'react';
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
     center: { lat: 37.7758, lng: -122.435 }, // this is SF
     zoom: 13
   };
   this.map = new google.maps.Map(this.mapNode, mapOptions);
   debugger
   this.MarkerManager = new MarkerManager(this.map);
   this.MarkerManager.updateMarkers(this.props.listings);
  }
  render(){
    debugger
    if (this.MarkerManager && this.props.listing){
      this.MarkerManager.updateMarkers(this.props.listings);
    }
    return(
      <div id='map-container' ref ={ map => this.mapNode = map }></div>
    );
  }
}
export default ListingMap;
