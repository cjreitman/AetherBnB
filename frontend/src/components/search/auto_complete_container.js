import { connect } from 'react-redux';
import AutoComplete from './auto_complete';
import { fetchSpots } from './../../actions/spots_actions';
import {
  receiveSearchStatus,
  receiveLocation,
  receiveBounds,
  receiveMapIsActive
} from "./../../actions/search_actions";

const mapStateToProps = state => {
  return {
  activeSearch: state.ui.activeSearch,
  spots: Object.values(state.entities.spots),
}};

const mapDispatchToProps = dispatch => ({
  fetchSpots: options => dispatch(fetchSpots(options)),
  receiveSearchStatus: active => dispatch(receiveSearchStatus(active)),
  receiveLocation: location => dispatch(receiveLocation(location)),
  receiveBounds: bounds => dispatch(receiveBounds(bounds)),
  receiveMapIsActive: (mapIsActive) => dispatch(receiveMapIsActive(mapIsActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);