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

      lat = 42.877742;
      lng = -97.380979;
    }
    const mapOptions = {
     center: { lat: lat, lng: lng }, // this is SF
     zoom: 13
   };
   this.map = new google.maps.Map(this.mapNode, mapOptions);
   this.MarkerManager = new MarkerManager(this.map);
   this.MarkerManager.updateMarkers(this.props.listings);
  }

  sameMapValue(map_center){

    if (map_center == null && this.props.listings.map_center != null ||
        map_center != null && this.props.listings.map_center == null) {
      return false;
    }
    if(map_center == null && this.props.listings.map_center == null ||
      (map_center[0] == this.props.listings.map_center[0] &&
        map_center[1] == this.props.listings.map_center[1] )){
      return true;
    }

    return false;
  }

  componentWillReceiveProps(nextProps){
    let lat;
    let lng;

    if(this.sameMapValue(nextProps.listings.map_center)){
      if (this.props.listings.map_center){
        lat = this.props.listings.map_center[0];
        lng = this.props.listings.map_center[1];
      }else{
        lat = 42.877742;
        lng = -97.380979;
      }
      const mapOptions = {
        center: { lat: lat, lng: lng }, // this is SF
        zoom: 13
      };
      this.map.setOptions(mapOptions);


      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }
  render(){
    if (this.MarkerManager && this.props.listings){
    }
    return(
      <div id='map-container' ref ={ map => this.mapNode = map }></div>
    );
  }
}
export default ListingMap;
