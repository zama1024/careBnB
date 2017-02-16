import React from 'react';
import { withRouter } from 'react-router';

class ListingForm extends React.Component{
  constructor(props) {
    debugger
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: this.props.currentUser.id,
      lat: -180,
      lng: 180,
      daily_rate: 0,
      donation_percentage: 0,
      address: "",
      city: "",
      listing_photo_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToSearch = this.navigateToSearch.bind(this);
    // this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  // handleCloudinary(e) {
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
  //     if(error)
  //       console.log(error);
  //     else
  //       this.setState({ picture_url: results[0].secure_url });
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const bench = Object.assign({}, this.state);
    this.props.createListing(bench);
    this.navigateToSearch();
  }

  render() {
    let care = "CARE";
    let fakeOf = "of";
    let fakeIn = "in";
    return (
      <div>
        <span className="greeting">We are excited to add you to our list {fakeOf} awesome hosts!</span>
        <span className="greeting">Please fill {fakeIn} the form below to become a host.</span>
        <form onSubmit={this.handleSubmit} className="listing-form-container">

          <div className="listing-top">
            <span id="greeting">We are glad to see that you<span id="care"> {care}</span></span>
          </div>

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
    );
  }
}

export default ListingForm;
