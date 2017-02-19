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
            <div>
              <h2 id="listingtitle">{listing.title}</h2>
              <span id="city">{listing.city}, United States</span>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
  );
  }
}

export default withRouter(ListingShow);
