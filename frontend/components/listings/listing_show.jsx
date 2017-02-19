import React from 'react';
import { Link, withRouter } from 'react-router';


class ListingShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchListing(this.props.params.listingId);
  }

  render() {
    const listing = this.props.listing;
    if (!listing) {
      return <div>Loading...</div>;
      }
    if (!listing.host){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <div id="coverContainer">
          <img className="coverPhoto" src={listing.listing_photo_url}></img>
        </div>
        <div id="showPageHeader">
          <div id="headerLinks">
            <div id="hlcontainer">

              <span className="headerLink" id="overview">Overiew</span>
              <span className="headerLink">Reviews</span>
              <span className="headerLink">The Host</span>
              <span className="headerLink">Location</span>
            </div>
            <hr id="greenhr"></hr>
            <hr id="regularhr"></hr>
          </div>
        </div>
        <div id="showPageSummary">
          <div id="userphoto">
            <img src={listing.host.profile_pic_url}></img>
            <span>{listing.host.fname}</span>
          </div>
          <div id="bulpoints">
            <div id="sumtop">
              <h2 id="listingtitle">{listing.title}</h2>
              <span id="city">{listing.city}, United States</span>
              <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆ 155</span>
              </div>
            </div>
            <div id="icons">
              <div className="icon">
                <img className="iconsize" src={window.guestNumber}/>
                <span className="sumfont">4 Guests</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.room}/>
                <span className="sumfont">1 Bedroom</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.bed}/>
                <span className="sumfont">2 Beds</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.donation}/>
                <span className="sumfont">{listing.donation_percentage}%</span>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div id="listingdetails">
          <h4>About This Listing</h4>
        </div>
      </div>
  );
  }
}

export default withRouter(ListingShow);
