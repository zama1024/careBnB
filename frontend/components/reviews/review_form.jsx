import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component {

  update(){

  }

  handleSubmit(){

  }
  render(){
    let care = "CARE";
    return(
      <form onSubmit={this.handleSubmit} className="listing-form-container">
        <div id = "reviewform" className="listing-form">
          <div className="session-top">
            <span id="greeting">We are glad to see that you<span id="care"> {care}</span></span>
          </div>

          <input placeholder="Description" className="inp" type="text"
            id='description'
            onChange={this.update("description")}/>

          <input placeholder="Accuracy" className="inp" type="number"
            id='daily_rate'
            onChange={this.update("daily_rate")}/>

          <input placeholder="Communication" className="inp" type="text"
            id='donation_percentage'
            onChange={this.update("donation_percentage")}/>

          <input placeholder="Cleanliness" className="inp" type="text"
            id='address'
            onChange={this.update("address")}/>

          <input placeholder="Location" className="inp" type="text"
            id='city'
            onChange={this.update("city")}/>
          <input placeholder="Checkin" className="inp" type="text"
            id='city'
            onChange={this.update("city")}/>
          <input placeholder="Value" className="inp" type="text"
            id='city'
            onChange={this.update("city")}/>

          <input type="submit" value="Submit"
            id="lfb" className="button"/>
        </div>
      </form>

    );

  }
}
export default ReviewForm;
