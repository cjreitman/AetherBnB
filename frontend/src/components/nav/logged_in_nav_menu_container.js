
import { connect } from 'react-redux';
import LoggedInNavMenu from './logged_in_nav_menu';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNavMenu);