import React from 'react';
import { withRouter } from 'react-router';

class ReviewShow extends React.Component{
  componentDidMount(){
    this.props.fetchReviews(this.props.listing.id);
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
  render(){
    let reviews = this.props.listing.reviews;

    let accuracyRating = 0;
    let communicationRating = 0;
    let cleanlinessRating = 0;
    let locationRating = 0;
    let checkinRating = 0;
    let valueRating = 0;
    let reviewsDesc = [];
    for (var i = 0; i < reviews.length; i++) {
      accuracyRating += reviews[i].accuracy_rating;
      communicationRating += reviews[i].communication_rating;
      cleanlinessRating += reviews[i].cleanliness_rating;
      locationRating += reviews[i].location_rating;
      checkinRating += reviews[i].checkin_rating;
      valueRating += reviews[i].value_rating;
      reviewsDesc.push(
        <div>
          <div className="reviewsDesc">
            <img src="https://0.academia-photos.com/7021490/2719491/3167051/s200_farshid.zaman.jpg" />
            <div>
              <span id="desc">{reviews[i].description}</span>
              <div id="helpline">

                <span id="date">{reviews[i].created_at}</span>
                <div id="helpfulness">
                  <span>Helpful | {reviews[i].review_helpfulness}</span>
                </div>
              </div>
              <hr id="deschr"></hr>
            </div>
          </div>
        </div>
      );
    }

    let accuracyAvg = accuracyRating / reviews.length;
    let communicationAvg = communicationRating / reviews.length;
    let cleanlinessAvg = cleanlinessRating / reviews.length;
    let locationAvg = locationRating / reviews.length;
    let checkinAvg = checkinRating / reviews.length;
    let valueAvg = valueRating / reviews.length;

    let rating = (accuracyRating + communicationRating + cleanlinessRating + locationRating + checkinRating + valueRating)/6.0/reviews.length;
    let ratingStars = this.makeStars(rating, "rating");
    let communicationStars = this.makeStars(communicationAvg);
    let cleanlinessStars = this.makeStars(cleanlinessAvg);
    let locationStars = this.makeStars(locationAvg);
    let checkinStars = this.makeStars(checkinAvg);
    let accuracyStars = this.makeStars(accuracyAvg);
    let valueStars = this.makeStars(valueAvg);
    return(
      <div id="listingdetails">
        <h4 id="reviewstag">{reviews.length} Reviews</h4>
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
      </div>
    );
  }
}
export default ReviewShow;
