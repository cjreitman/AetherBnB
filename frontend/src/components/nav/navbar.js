import React from 'react';
import './navbar.css';
import AutoCompleteContainer from './../search/auto_complete_container';
import LoggedInNavMenuContainer from './logged_in_nav_menu_container';
import LoggedOutNavMenuContainer from './logged_out_nav_menu_container';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getMenuOptions = this.getMenuOptions.bind(this);
    this.linkToMainPage = this.linkToMainPage.bind(this);
  }

  getMenuOptions() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-menu">
          <LoggedInNavMenuContainer />
        </div>
      );
    } else {
      return (
        <div className="nav-menu">
          <LoggedOutNavMenuContainer />
        </div>
      );
    }
  }

  linkToMainPage() {
    this.props.history.push('/');
    this.props.receiveMapIsActive(false);
    this.props.receiveSearchStatus(false);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-left">
          <h1 onClick={this.linkToMainPage}>&#198;</h1>
          <AutoCompleteContainer />
        </div>
        {this.getMenuOptions()}
      </div>
    );
  }
}

export default withRouter(NavBar);