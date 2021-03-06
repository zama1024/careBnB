import { connect } from 'react-redux';
import Home from './home';
import { fetchListings } from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => {
  const newProps = {
    currentUser: state.session.currentUser,
    listings: Object.keys(state.listings).map(id => state.listings[id])
  };


  return newProps;
};


const mapDispatchToProps = dispatch => ({
  fetchListings: listings => dispatch(fetchListings(listings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
