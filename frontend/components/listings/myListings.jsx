import React from 'react';
import {hashHistory} from 'react-router';

class MyListings extends React.Component {
  componentDidMount(){
    this.props.fetchListings({currentUser: this.props.currentUser.id});
  }

  toShowPage(id){
    return () => {
      hashHistory.push(`/listings/${id}`);
    };
  }

  render(){
    if(Object.keys(this.props.listings).length === 0){
      return <div>loading</div>;
    }
    let listings = Object.keys(this.props.listings);
    listings = listings.slice(0,listings.length - 1).map(id =>
      this.props.listings[id]);
      let photos = listings.map(listing => (
        <div key={listing.id} id="listingbookingwidth" className="searchpagedivbox">
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
      <div id="mybookings">
        <span id="greeting">We are proud to have you as a member. Here is a list of all your listings</span>
        <div id="bookings1">
          {photos}
        </div>
      </div>
    );
  }
}
export default MyListings;
