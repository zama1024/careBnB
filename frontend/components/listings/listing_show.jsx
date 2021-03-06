import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewShowContainer from '../reviews/review_show_container';
import BookingFormContainer from '../bookings/booking_form_container';


class ListingShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {bformPos: 0};
  }
  componentDidMount() {
    this.props.fetchListing(this.props.params.listingId);
    var bform = document.getElementById('bform');
    window.addEventListener('scroll', this.bformScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.bformScroll, false);
  }

  bformScroll(){

    let currentScrollPos = window.scrollY;
    var bform = document.getElementById('bform');
    var footercontainer = document.getElementById('footermargin');
    if(bform && bform.getBoundingClientRect().top <= 1){
      $( "#bform" ).addClass( 'bformTop');
      $( "#bform" ).removeClass( 'bform');

    }
    var coverContainer = document.getElementById('coverContainer');
    if(coverContainer && coverContainer.getBoundingClientRect().bottom >= 52){
      $( "#bform" ).addClass( 'bform');
      $( "#bform" ).removeClass( 'bformTop');
    }
  }

  render() {
    const listing = this.props.listing;
    if (!listing) {
      return (
        <div className="loader">
        </div>
      );
      }
    if (!listing.host){
      return (
        <div className="loader">

        </div>
      );
    }
    if (!listing.reviews){
      return (
        <div className="loader">
        </div>
      );
    }

    return(
      <div>
        <div id="coverContainer">
          <img className="coverPhoto" src={listing.listing_photo_url}></img>
        </div>
        <div id="wholepage">
        <div id="pagelhs">
        <div id="showPageHeader">
          <div id="headerLinks">
            <div id="hlcontainer">

              <span className="headerLink" id="overview">Overiew</span>
              <span className="headerLink"><a href="#reviews">Reviews</a></span>
              <span className="headerLink">The Host</span>
              <span className="headerLink">Location</span>
            </div>
            <hr id="greenhr"></hr>
            <hr className="regularhr"></hr>
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
              <span id="city">{listing.city}</span>
              <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆ {listing.reviews.length}</span>
              </div>
            </div>
            <div id="icons">
              <div className="icon">
                <img className="iconsize" src={window.guestNumber}/>
                <span className="sumfont">{listing.max_guests} Guests</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.room}/>
                <span className="sumfont">{listing.num_bedroom} Bedroom</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.bed}/>
                <span className="sumfont">{listing.listing_beds} Beds</span>
              </div>
              <div className="icon">
                <img className="iconsize" src={window.donation}/>
                <span className="sumfont">{listing.donation_percentage}%</span>
              </div>
            </div>
          </div>
        </div>
        <hr id="abovelisting"></hr>
        <div id="listingdetails">
          <h4>About This Listing</h4>
          <hr></hr>
          <div className="boxcontainer">
            <div className="boxitem first">
              The space
            </div>
            <div className="boxitem middle">
              <span className="disblock">Accommodates: <span className="val"> {listing.max_guests} </span> </span>
              <span className="disblock">Bathrooms: <span className="val"> {listing.num_bathroom} </span></span>
              <span className="disblock">Bedrooms: <span className="val"> {listing.num_bedroom} </span></span>
              <span className="disblock">Beds: <span className="val"> {listing.listing_beds} </span></span>
            </div>
            <div className="boxitem last">
              <span className="disblock">Check In:  <span className="val">{listing.check_in}</span> </span>
              <span className="disblock">Check_out:  <span className="val">{listing.check_out}</span></span>
              <span className="disblock">Type:  <span className="val">{listing.property_type}</span></span>
              <span className="disblock">Room Type:  <span className="val">{listing.listing_type.split(" ")[0 ]}</span></span>
            </div>
          </div>
          <hr></hr>
          <div className="boxcontainer">
            <div className="boxitem first">
              Amenities
            </div>
            <div className="boxitem middle">
              <span className="disblock amenity"><img className="amenitieslogo" src={window.kitchen} /><span className="val">  Kitchen </span> </span>
              <span className="disblock amenity"><img className="amenitieslogo" src={window.internet} /><span className="val">  Internet </span> </span>
              <span className="disblock amenity"><img className="amenitieslogo" src={window.tv} /><span className="val">  TV </span> </span>
              <span className="disblock amenity"><img className="amenitieslogo" src={window.ac} /><span className="val">  Air Conditioner </span> </span>
            </div>

            <div className="boxitem last">
              <span className="disblock amenity"><img className="amenitieslogo" src={window.parking} /><span className="val">  Free Parking </span> </span>
              <span className="disblock amenity"><img className="amenitieslogo" src={window.family} /><span className="val">  Family/Kid Friendly </span> </span>

            </div>
          </div>
          <hr></hr>
          <div className="boxcontainer">
            <div className="boxitem first">
              Prices
            </div>
            <div className="boxitem middle">
              <span className="disblock">Service Fee: <span className="val"> ${listing.service_fee} </span> </span>
              <span className="disblock">Weekly Discount: <span className="val"> {listing.weekly_discount}% </span></span>
            </div>
            <div className="boxitem last">
              <span className="disblock">Monthly Discount: <span className="val"> {listing.monthly_discount}% </span></span>
              <span className="disblock">Cancellation: <span className="val"> Not Allowed </span></span>
            </div>
          </div>
          <hr></hr>
          <div className="boxcontainer">
            <div id="desctag" className="boxitem first">
              Description
            </div>
            <div id="listdesc" className="middle">
              <span>{listing.description}</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <a id="reviews"><ReviewShowContainer listing={listing}/></a>
        </div>
        <div id="showrhs">

          <div className="bform" id="bform">

            <BookingFormContainer listingId={listing.id} clearBookingErrors={this.props.clearBookingErrors} createBooking={this.props.createBooking} daily_rate={listing.daily_rate} service_fee={listing.service_fee}/>
          </div>
        </div>
        </div>
      </div>
  );
  }
}

export default withRouter(ListingShow);
