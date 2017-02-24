import React from 'react';
import ListingMap from '../map/ListingMap';
import Rheostat from 'rheostat';
import {hashHistory} from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    let address = this.props.params.address || "";
    let checkIn = this.props.params.checkIn || "";
    let checkOut = this.props.params.checkOut || "";
    let guests = this.props.params.guests || "";
    let roomType = "";
    let priceRange = [0,1000];
    this.state ={fetching: true, address, checkIn, checkOut, guests, roomType, priceRange};
  }
  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value}, () => {
        let formparams = Object.assign({},this.state);
        delete formparams.fetching;
        delete formparams.address;
        this.props.updateSearchParams(formparams);
      });
    };
  }
   componentDidMount() {
    $("input.searchHidden" ).toggleClass( "searchShow");
    $("div.nav-container" ).toggleClass( "nav-container-border");
    let searchParams = Object.assign({},this.state);
    delete searchParams.fetching;
    this.props.fetchListings({searchParams}).then((listings) => {this.setState({fetching: false})});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.fetchListings({searchParams: this.props.searchParams}).then((listings) => {this.setState({fetching: false})});
  }
  updateValue(sliderState){
    this.setState({priceRange: [sliderState.values[0], sliderState.values[1]]}, () => {
      let formparams = Object.assign({},this.state);
      delete formparams.fetching;
      delete formparams.address;
      this.props.updateSearchParams(formparams);
    });
  }
  toShowPage(id){
    return (e) => {
      e.preventDefault();
      hashHistory.push(`/listings/${id}`);
    };
  }

  render(){
    if(this.state.fetching){
      return null;
    }
    // let listings = Object.keys(this.props.listings);
    // let photos = listings.slice(0,listings.length - 1).map(id =>
    //   <img src={this.props.listings[id].listing_photo_url} />);
    let listings = Object.keys(this.props.listings);
    listings = listings.slice(0,listings.length - 1).map(id =>
      this.props.listings[id]);
      let photos = listings.map(listing => (
        <div className="searchpagedivbox">
          <img key={listing.id} onClick={this.toShowPage(listing.id).bind(this)} className = "listphoto" src={listing.listing_photo_url}/>
          <div id="searchdivinfo">
            <span>${listing.daily_rate} {listing.property_type} · {listing.num_bedroom} beds</span>
            <span id="searchinfotitle">{listing.title}</span>
            <div className="starcontainer">
              <img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} />
              <span>{listing.reviews.length} Reviews</span>
            </div>
          </div>
        </div>
      ));

    return(
      <div id="searchpage">
        <div id="searchform">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="date" type="date" onChange={this.update("checkIn").bind(this)} placeholder="Check In" />
            <input className="date" type="date"  onChange={this.update("checkOut").bind(this)}placeholder="Check Out" />
              <input type="number" onChange={this.update("guests").bind(this)} placeholder="Guests" />
              <input type="text"  onChange={this.update("roomType").bind(this)}placeholder="Room type" />
              <div className="rheostat-container">
                <span>Min Price: ${this.state.priceRange[0]}</span>
                <Rheostat min={1} max={1000} values={[1, 1000]}  onValuesUpdated={this.updateValue.bind(this)}/>
                  <span>Max Price: ${this.state.priceRange[1]}</span>

              </div>
              <input id="searchsubmit" type="submit" value="Search"/>
          </form>
        </div>
        <div id="mappage">

          <div id="searchlhs">
            {photos}
          </div>
          <div id="maprhs">

            <ListingMap id="map" listings={this.props.listings}/>
          </div>

        </div>

      </div>
    );
  }
}
export default Search;
