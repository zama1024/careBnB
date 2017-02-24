import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import MyBookings from './myBookings';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    bookings: state.bookings
  };
};


const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBookings);
