import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';

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
    let photos = this.props.listings.map(listing => (<img onClick={this.toShowPage(listing.id)} className = "list" src={listing.listing_photo_url}/>));
    return(
      <div className="vidcontainer">
        <video className="vid" autoPlay loop>
          <source src={ window.videomp4 } type="video/mp4" />
        </video>
        <div>
          <h1>Listings: </h1>
          {photos}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
