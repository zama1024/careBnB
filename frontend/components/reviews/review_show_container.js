import { connect } from 'react-redux';
import ReviewShow from './review_show';
import {fetchReviews, updateReview} from '../../actions/review_actions';

const mapStateToProps = (state) => {
  // const newProps = {
  //   listing: ownProps.listing
  // };
  // return newProps;

  // return state.reviews;
  return {
    currentUser: state.session.currentUser,
    reviews: state.reviews
  };
};


const mapDispatchToProps = (dispatch, { listing }) => ({
  fetchReviews: () => dispatch(fetchReviews(listing.id)),
  updateReview: (review) => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewShow);
