import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveSearchStatus, receiveMapIsActive } from '../../actions/search_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveMapIsActive: (mapIsActive) => dispatch(receiveMapIsActive(mapIsActive)),
  receiveSearchStatus: (active) => dispatch(receiveSearchStatus(active))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);