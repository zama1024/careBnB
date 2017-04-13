import { connect } from 'react-redux';
import Search from './search';
import {updateSearchParams} from "../../actions/search_actions";
import {fetchListings} from "../../actions/listing_actions";
const mapStateToProps = (state, ownProps) => {
  return {
    listings: state.listings,
    searchParams: state.searchParams
  };
};


const mapDispatchToProps = dispatch => ({
  fetchListings: listings => dispatch(fetchListings(listings)),
  updateSearchParams: searchParams => dispatch(updateSearchParams(searchParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
