import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.formType,
  demo: ownProps.demo
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
