import React from 'react';
import {hashHistory} from 'react-router';

class MyBookings extends React.Component {
  componentDidMount(){
    this.props.fetchBookings();
  }

  toShowPage(id){
    return () => {
      hashHistory.push(`/listings/${id}`);
    };
  }

  render(){
    if(Object.keys(this.props.bookings.bookings).length === 0){
      return <div>loading</div>;
    }
    let listings = Object.keys(this.props.bookings.bookings).map(id => this.props.bookings.bookings[id].listing);
      let photos = listings.map(listing => {
      return (
        <div className="searchpagedivbox">
          <img key={listing.id} onClick={this.toShowPage(listing.id).bind(this)} className = "listphoto" src={listing.listing_photo_url}/>
          <div id="searchdivinfo">
            <span>${listing.daily_rate} {listing.property_type} · {listing.num_bedroom} beds</span>
            <span id="searchinfotitle">{listing.title}</span>
            <div className="starcontainer">
              <img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} />

            </div>
          </div>
        </div>
      )});
    return(
      <div>
        {photos}
      </div>
    );
  }
}
export default MyBookings;
