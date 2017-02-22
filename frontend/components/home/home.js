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


  render() {
    let fakeof = "of";
    let fakefor = "for";
    let photos = this.props.listings.map(listing => (<img onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>));
    return(
      <div className="vidcontainer">
        <video className="vid" autoPlay loop>
          <source src={ window.videomp4 } type="video/mp4" />
        </video>
        <div id="greet">

          <span><span id="CareBnB">CareBnB </span>Book your home {fakefor} next vacation and be a part {fakeof} a greater cause.</span>
        </div>
        <div>
          <h1>Listings: </h1>
            {photos}
        </div>
        <FeaturedCities />
      </div>
    );
  }
}

export default withRouter(Home);
