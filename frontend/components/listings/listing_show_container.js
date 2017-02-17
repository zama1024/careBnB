import { connect } from 'react-redux';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  const newProps = {
    currentUser: state.session.currentUser,
    listing: state.listings[ownProps.params.listingId]
  };

  return newProps;
};


const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
