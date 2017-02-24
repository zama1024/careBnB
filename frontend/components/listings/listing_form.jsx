import React from 'react';
import { withRouter } from 'react-router';
import {hashHistory} from 'react-router';

class ListingForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: this.props.currentUser.id,
      daily_rate: 0,
      donation_percentage: 0,
      address: "",
      city: "",
      listing_photo_url: "https://cdn.wallpapersbuzz.com/image/4650/b_nice-house.jpg",
      max_guests: 1,
      num_bedroom: 1,
      listing_type: "",
      num_bathroom: 1,
      check_in: "2PM",
      check_out: "12pm",
      property_type: "house",
      service_fee: 0,
      weekly_discount: 0,
      monthly_discount: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToSearch = this.navigateToSearch.bind(this);
    // this.handleCloudinary = this.handleCloudinary.bind(this);
  }



  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const listing = Object.assign({}, this.state);
    this.props.createListing(listing).then(listing => hashHistory.push(`/listings/${listing.id}`));
    this.navigateToSearch();
  }

  render() {
    let carebnb = "CareBnB";
    let care = "CARE";
    let fakeOf = "of";
    let fakeIn = "in";
    let fakeFor = "for";
    let fakeDo = "do";
    return (
      <div id="pagediv">
        <div id="holder">
          <div id="background">
            <h1 id="backTag">Start your journey as a <h1 id="carebnb">{carebnb}</h1> host</h1>
          </div>

        </div>
        <div id="leftside">
          <span className="greeting" id="greetline1">We are excited to add you to our list {fakeOf} awesome hosts!</span>
          <span className="greeting"> Please fill {fakeIn} the form below to become a host.</span>
          <form onSubmit={this.handleSubmit} className="listing-form-container">

            <div className="listing-form">

              <input placeholder="Title" className="inp" type="text"
                id='title'
                value={this.state.title}
                onChange={this.update("title")}/>

              <input placeholder="Description" className="inp" type="text"
                id='description'
                value={this.state.description}
                onChange={this.update("description")}/>

              <input placeholder="Daily Rate" className="inp" type="text"
                id='daily_rate'
                onChange={this.update("daily_rate")}/>

              <input placeholder="Donation Percentage" className="inp" type="text"
                id='donation_percentage'
                onChange={this.update("donation_percentage")}/>

              <input placeholder="Street Address" className="inp" type="text"
                id='address'
                value={this.state.address}
                onChange={this.update("address")}/>

              <input placeholder="City" className="inp" type="text"
                id='city'
                value={this.state.city}
                onChange={this.update("city")}/>


              <input type="submit" value="Create Listing"
                id="lfb" className="button"/>
            </div>
          </form>
        </div>
        <div>
          <img id ="rhs" src="http://images.all-free-download.com/images/graphicthumb/sketch_urban_building_vector_573417.jpg"></img>
        </div>
        <div id="botholder">

          <div id="guess">
            <img id="bulb" src="http://images.clipartbro.com/80/lightbulb-clip-art-vector-online-royalty-free-amp-amp-public-80082.svg"></img>
            <span className="priceguess">Listing {fakeFor} a week we think you could earn </span>
            <span className="price">$357 </span>
            <span className="priceguess"> and donate </span>
            <span className="price">$100.</span>
          </div>
          <div className="details">
            <img id="house" src="http://www.clker.com/cliparts/k/3/k/b/W/5/teal-house-md.png"></img>
            <h1>What's {fakeIn} a listing?</h1>
            <span>You’ll fill out title, description, take and upload photos, and pick a price and donation percentage. Your listing helps guests get a sense {fakeOf} what your place is like.</span>
          </div>
          <div className="details">
            <img id="house" src="http://www.populationconnection.org/wp-content/uploads/2015/01/icon-human.png"></img>
            <h1>Who can book?</h1>
            <span>You set the house rules {fakeFor} your listing. Host controls and calendar settings can help make hosting easier.</span>
          </div>
          <div className="details">
            <img id="house" src="https://www.teachforamerica.org/sites/default/files/styles/large/public/thumbnails/image/2016/08/icon_salary_and_benefits_1.png?itok=AHe33PqV"></img>
            <h1>What {fakeDo} you get?</h1>
            <span>You get to earn and donate at the same time just by staying home.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingForm;
