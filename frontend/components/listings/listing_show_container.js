import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking, clearBookingErrors } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const newProps = {
    currentUser: state.session.currentUser,
    listing: state.listings[ownProps.params.listingId]
  };
  return newProps;
};


const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
