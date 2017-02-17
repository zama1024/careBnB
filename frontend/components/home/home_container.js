import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  null
)(Home);
