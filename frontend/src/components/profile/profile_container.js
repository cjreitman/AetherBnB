import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserBookings, deleteBooking, fetchSpotBookings } from '../../actions/bookings_actions';
import { fetchSpot } from '../../actions/spots_actions';
import { receiveSearchStatus } from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user,
  bookings: Object.values(state.entities.bookings),
  spots: state.entities.spots
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBookings: (user_id) => dispatch(fetchUserBookings(user_id)),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
    fetchSpotBookings: (spot_id) => dispatch(fetchSpotBookings(spot_id)),
    fetchSpot: (spot_id) => dispatch(fetchSpot(spot_id)),
    receiveSearchStatus: (active) => dispatch(receiveSearchStatus(active))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);