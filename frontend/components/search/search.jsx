import React from 'react';
import ListingMap from '../map/ListingMap';

class Search extends React.Component {
  constructor(props){
    super(props);
    let address = this.props.params.address || "";
    let checkIn = this.props.params.checkIn || "";
    let checkOut = this.props.params.checkOut || "";
    let guests = this.props.params.guests || "";
    this.state ={fetching: true, address, checkIn, checkOut, guests};
  }
   componentDidMount() {
    let searchParams = Object.assign({},this.state);
    delete searchParams.fetching;
    this.props.fetchListings({searchParams}).then((listings) => {this.setState({fetching: false})});
  }
  render(){
    if(this.state.fetching){
      return null;
    }
    let photos = Object.keys(this.props.listings).map(id => <img src={this.props.listings[id].listing_photo_url} />)
    return(
      <div id="searchpage">
        <div id="searchlhs">
          {photos}
        </div>
        <ListingMap id="map" listings={this.props.listings}/>
      </div>
    );
  }
}
export default Search;
