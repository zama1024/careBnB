import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import navBar from './navbar';
import {updateSearchParams} from "../../actions/search_actions";

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    searchParams: state.searchParams
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: (currentUser) => dispatch(logout(currentUser)),
  submitSearch: (searchParams) => dispatch(submitSearch(searchParams)),
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
