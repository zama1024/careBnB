import { connect } from 'react-redux';
import ReviewShow from './review_show';
import {fetchReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const newProps = {
    listing: ownProps.listing
  };
  return newProps;
};


const mapDispatchToProps = dispatch => ({
  fetchReviews: (listingId) => dispatch(fetchReviews(listingId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewShow);
