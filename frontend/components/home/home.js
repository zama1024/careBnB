import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import FeaturedCities from './featured_cities';
import HomeSearchContainer from '../search/home_search_container';
import Slider from 'react-slick';

class Home extends React.Component {
  componentDidMount(){
    $("input.searchShow" ).toggleClass( "searchHidden", true);
    $("div.nav-container-border" ).toggleClass( "nav-container", true);
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
    if(this.props.listings.length == 0){
      return <div>loading</div>;
    }
    var settings = { dots: false, arrows: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, adaptiveHeight: false};
    let fakeof = "of";
    let fakefor = "for";
    let listings = this.props.listings.slice(0, this.props.listings.length -1);

    let photos = listings.map(listing => (
      <div className="homebox">
        <img key={listing.id} onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>
        <div id="info">
          <span>${listing.daily_rate} {listing.property_type} · {listing.num_bedroom} beds</span>
          <span id="infotitle">{listing.title}</span>
          <div className="starcontainer">
            <img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} />
            <span>{listing.reviews.length} Reviews</span>
          </div>
        </div>
      </div>
    ));
    let sorted = listings.slice().sort((a,b) => {return a.reviews.length > b.reviews.length;});
    let reviewSorted = sorted.map(listing => (
      <div className="homebox">
        <img key={listing.id} onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>
        <div id="info">
          <span>${listing.daily_rate} {listing.property_type} · {listing.num_bedroom} beds</span>
          <span id="infotitle">{listing.title}</span>
          <div className="starcontainer">
            <img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} /><img className="star" src={window.tealstar} />
            <span>{listing.reviews.length} Reviews</span>
          </div>
        </div>
      </div>
    ));
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
        <div className='homeinfocontainer'>
          <h3>Homes</h3>
          <Slider  {...settings}>
            {photos}
          </Slider>
        </div>
        <div>

          <FeaturedCities />
        </div>
        <div className='homeinfocontainer'>
          <h3>Browse by review</h3>
          <Slider  {...settings}>
            {reviewSorted}
          </Slider>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
