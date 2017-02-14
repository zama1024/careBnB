import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import navBar from './navbar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: (currentUser) => dispatch(logout(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
