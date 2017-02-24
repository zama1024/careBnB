import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import { authModalStyle } from '../../util/modal_styles';
import ReviewFormContainer from './review_form_container';

class ReviewShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
  }

  incrementHelpfulness(review){

    return () => {
      review.review_helpfulness += 1;
      this.props.updateReview({review});
    };
  }

  componentDidMount(){
    this.props.fetchReviews();
  }

  makeStars(starsNum, type){
    let classname = type ? "stars" : "smallstars";
    let tealStarNum = Math.round(starsNum);
    let greystarNum = 5 - tealStarNum;
    let stars = [];
    for (var i = 0; i < tealStarNum; i++) {
      stars.push(<img className={classname} src={window.tealstar} />);
    }
    for (var i = 0; i < greystarNum; i++) {
      stars.push(<img className={classname} src={window.greystar} />);
    }
    return stars;
  }

  openModal(type, demo) {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render(){
    let reviews = this.props.reviews;
    let keys = Object.keys(reviews)
    keys = keys.slice(0,keys.length - 1);

    if (!keys.length) {
      return (
      <div>
      <div id= "buttonholder">
        <h3>Want to leave a Review?</h3>
        <div id="reviewbutton" onClick={this.openModal.bind(this)}>Leave a Review</div>
      </div>
      <Modal isOpen={this.state.showModal}
        onRequestClose={this.closeModal.bind(this)}
        style={authModalStyle}
        contentLabel="Example Modal">
        <ReviewFormContainer listingId={this.props.listing.id} user={this.props.currentUser}
          closeModal={this.closeModal.bind(this)}
        />
      </Modal>
    </div>
    );
  }

    let accuracyRating = 0;
    let communicationRating = 0;
    let cleanlinessRating = 0;
    let locationRating = 0;
    let checkinRating = 0;
    let valueRating = 0;
    let reviewsDesc = [];
    for (var i = 0; i < keys.length ; i++) {
      let el = keys[i];
      accuracyRating += reviews[el].accuracy_rating;
      communicationRating += reviews[el].communication_rating;
      cleanlinessRating += reviews[el].cleanliness_rating;
      locationRating += reviews[el].location_rating;
      checkinRating += reviews[el].checkin_rating;
      valueRating += reviews[el].value_rating;
      let author = reviews[el].author;
      reviewsDesc.push(
        <div>
          <div className="reviewsDesc">
            <div id="reviewimage">
              <img src={author.profile_pic_url} />
              <span>{author.fname}</span>

            </div>
            <div id="reviewcontainer">
              <span id="desc">{reviews[el].description}</span>
              <div id="helpline">
                <span id="date">{(reviews[el].created_at).slice(0,10)}</span>
                <div id="helpfulness" onClick={ this.incrementHelpfulness(reviews[el])}>
                  <img src={window.like} />
                  <span>Helpful | {reviews[el].review_helpfulness}</span>
                </div>
              </div>
              <hr id="deschr"></hr>
            </div>
          </div>
        </div>
      );
    }

    let accuracyAvg = accuracyRating / keys.length;
    let communicationAvg = communicationRating / keys.length;
    let cleanlinessAvg = cleanlinessRating / keys.length;
    let locationAvg = locationRating / keys.length;
    let checkinAvg = checkinRating / keys.length;
    let valueAvg = valueRating / keys.length;
    let rating = (accuracyRating + communicationRating + cleanlinessRating + locationRating + checkinRating + valueRating)/6.0/keys.length;
    let ratingStars = this.makeStars(rating, "rating");
    let communicationStars = this.makeStars(communicationAvg);
    let cleanlinessStars = this.makeStars(cleanlinessAvg);
    let locationStars = this.makeStars(locationAvg);
    let checkinStars = this.makeStars(checkinAvg);
    let accuracyStars = this.makeStars(accuracyAvg);
    let valueStars = this.makeStars(valueAvg);
    return(
      <div id="listingdetails">
        <h4 id="reviewstag">{keys.length} Reviews</h4>
        <h4 id="stargroup">{ratingStars}</h4>
        <hr></hr>
        <div id="summary" className="boxcontainer">
          <div className="boxitem first">
            Summary
          </div>
          <div className="boxitem middle">
            <span className="starItem">Accuracy:  {accuracyStars}</span>
            <span className="starItem">Communication: {communicationStars}</span>
            <span className="starItem">Cleanliness: {cleanlinessStars}</span>
          </div>
          <div className="boxitem last">
            <span className="starItem">Check In:  {checkinStars}</span>
            <span className="starItem">Location: {locationStars}</span>
            <span className="starItem">Value:  {valueStars}</span>
          </div>
        </div>
        <div>
          {reviewsDesc}
        </div>
        <div id= "buttonholder">
          <h3>Want to leave a Review?</h3>
          <div id="reviewbutton" onClick={this.openModal.bind(this)}>Leave a Review</div>
        </div>
        <Modal isOpen={this.state.showModal}
          onRequestClose={this.closeModal.bind(this)}
          style={authModalStyle}
          contentLabel="Example Modal">
          <ReviewFormContainer listingId={this.props.listing.id} user={this.props.currentUser}
            closeModal={this.closeModal.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}
export default ReviewShow;
