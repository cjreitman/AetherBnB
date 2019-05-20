import { connect } from "react-redux";
import { createBooking } from "../../actions/bookings_actions";
import ReservationForm from "./reservation_form";
import { fetchSpotBookings } from "../../actions/bookings_actions";

const mapStateToProps = (state, ownProps) => {
  let user_id;

  if(state.session.user) {
    if (state.session.user.token) {
      user_id = state.session.user.token.id;
    } else {
      user_id = state.session.user.id;
    }
  } else {
    user_id = '';
  }
   
  const user = {
    user_id: user_id,
    bookings: state.entities.bookings
  };

  return {
       user: user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: bookingInfo => dispatch(createBooking(bookingInfo)),
    fetchSpotBookings: id => dispatch(fetchSpotBookings(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
