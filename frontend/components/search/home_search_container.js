import { connect } from 'react-redux';
import HomeSearch from './home_search';
import {fetchListings} from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    listings: state.listings
  };
};


const mapDispatchToProps = dispatch => ({
  fetchListings: listings => dispatch(fetchListings(listings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearch);
