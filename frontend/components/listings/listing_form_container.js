import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);
