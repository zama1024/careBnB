import { connect } from 'react-redux';
import Search from './search';

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
)(Search);
