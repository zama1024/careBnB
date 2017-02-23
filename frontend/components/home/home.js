import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import FeaturedCities from './featured_cities';
import HomeSearchContainer from '../search/home_search_container';

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
    let listings = this.props.listings.slice(0, this.props.listings.length -1);
    let photos = listings.map(listing => (<img onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>));
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
        <HomeSearchContainer />
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
