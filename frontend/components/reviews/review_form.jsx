import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.user;
    let user_id = user? user.id : null;
    this.state = {
      accuracy_rating: 0,
      communication_rating: 0,
      cleanliness_rating: 0,
      location_rating: 0,
      checkin_rating: 0,
      value_rating: 0,
      description: "",
      listing_id: this.props.listingId,
      author_id: user_id
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({name: nextValue});
   }

  updateDescription(e){
    this.setState({description: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let review = this.state;
    this.props.createReview({review});
    this.props.closeModal();
  }
  render(){
    debugger
    if (!this.props.user){
      return <span id="greeting">Please login to leave a review :)</span>;
    }
    let care = "CARE";
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="listing-form-container">
        <div id = "reviewform" className="listing-form">
          <div className="session-top">
            <span id="greeting">We are glad to see that you<span id="care"> {care}</span></span>
          </div>

          <div>
            <span>Accuracy</span>
            <StarRatingComponent
              name="accuracy_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <span>Communication</span>
            <StarRatingComponent
              name="communication_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <span>Cleanliness</span>
            <StarRatingComponent
              name="cleanliness_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <span>Location</span>
            <StarRatingComponent
              name="location_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <span>Checkin</span>
            <StarRatingComponent
              name="checkin_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <span>Value</span>
            <StarRatingComponent
              name="value_rating"
              starCount={5}
              value={0}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <input placeholder="Description" className="inp" type="text"
            id='description'
            onChange={this.updateDescription.bind(this)}/>

          <input type="submit" value="Submit"
            id="lfb" className="button"/>
        </div>
      </form>

    );

  }
}
export default ReviewForm;
