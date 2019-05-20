import { connect } from "react-redux";
import { fetchSpots, fetchSpot } from "../../actions/spots_actions";
import { fetchSpotBookings } from "../../actions/bookings_actions";
import {
  receiveSearchStatus,
} from "../../actions/search_actions";

import SpotShow from "./spot_show";

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.id],
    spot_id: ownProps.match.params.id,
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: data => dispatch(fetchSpots(data)),
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchSpotBookings: id => dispatch(fetchSpotBookings(id)),
    receiveSearchStatus: active => dispatch(receiveSearchStatus(active))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
