import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import FeaturedCities from './featured_cities';

class Home extends React.Component {
  componentDidMount(){
    this.props.fetchListings();
  }

  toShowPage(id){
    return () => {
      hashHistory.push(`/listings/${id}`);
    };
  }

  toSearchPage(){
    hashHistory.push(`/search/`);
  }

  render() {
    let fakeof = "of";
    let fakefor = "for";
    let photos = this.props.listings.map(listing => (<img onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>));
    return(
      <div>
        <div className="vidcontainer">
          <video className="vid" autoPlay loop>
            <source src={ window.videomp4 } type="video/mp4" />
          </video>
        </div>
        <div id="greet">
          <span><span id="CareBnB">CareBnB </span>Book your home {fakefor} next vacation and be a part {fakeof} a greater cause.</span>
        </div>
        <div id="searchContainer">
          <div id="where">
            <label>Where</label>
            <input type="text" placeholder="Destination, city" />
          </div>
          <div id="when">
            <label>When</label>


              <input type="date" placeholder="Check In" />
              <input type="date" placeholder="Check Out" />

          </div>
          <div id="guests">
            <div>

              <label>Guests</label>
              <input type="number" placeholder="1 guests"/>
            </div>
            <div onClick={this.toSearchPage} id="searchicon"><img src="http://www.endlessicons.com/wp-content/uploads/2015/08/search-icon-2.png" /></div>
          </div>
        </div>
        <div>
          <h1>Listings: </h1>
          {photos}
        </div>
        <h3>FeaturedCities</h3>
        <FeaturedCities />

      </div>
    );
  }
}

export default withRouter(Home);
