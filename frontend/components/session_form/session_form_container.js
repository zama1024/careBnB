import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.formType,
  demo: ownProps.demo
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
  debugger
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
