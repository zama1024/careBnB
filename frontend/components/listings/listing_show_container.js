import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  const newProps = {
    currentUser: state.session.currentUser,
    listing: state.listings[ownProps.params.listingId]
  };
  return newProps;
};


const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
