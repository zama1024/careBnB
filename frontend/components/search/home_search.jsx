import React from 'react';
import { hashHistory } from 'react-router';

class HomeSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: "",
      checkIn: "",
      checkOut: "",
      guests: ""
    };
  }

  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }
  toSearchPage(){
    let address = this.state.address;
    let checkIn = this.state.checkIn;
    let checkOut = this.state.checkOut;
    let guests = this.state.guests;
    hashHistory.push(`/search/${address}/${checkIn}/${checkOut}/${guests}/`);
  }

  render(){
    return(
    <div id="searchContainer">
      <div id="where">
        <label>Where</label>
        <input onChange={this.update("address").bind(this)} type="text" placeholder="Destination, city" />
      </div>
      <div id="when">
        <label>When</label>


          <input type="date" onChange={this.update("checkIn").bind(this)} placeholder="Check In" />
          <input type="date"  onChange={this.update("checkOut").bind(this)}placeholder="Check Out" />

      </div>
      <div id="guests">
        <div>

          <label>Guests</label>
          <input type="number" onChange={this.update("guests").bind(this)} placeholder="1 guests"/>
        </div>
        <div onClick={this.toSearchPage.bind(this)} id="searchicon"><img src="http://www.endlessicons.com/wp-content/uploads/2015/08/search-icon-2.png" /></div>
      </div>
    </div>
  );
  }
}
export default HomeSearch;
