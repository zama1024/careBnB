import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import MyListings from './myListings';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    listings: state.listings
  };
};


const mapDispatchToProps = dispatch => ({
  fetchListings: listing => dispatch(fetchListings(listing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListings);
