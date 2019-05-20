import React from 'react';
import { withRouter } from 'react-router-dom';

class LoggedInNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.linkToProfile = this.linkToProfile.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  linkToProfile() {
    this.props.history.push('/profile');
  }

  render() {
    return (
      <div className="nav-menu-buttons">
        <button className="nav-menu-button" onClick={this.linkToProfile}>My Trips</button>
        <button className="nav-menu-button" onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default withRouter(LoggedInNavMenu);