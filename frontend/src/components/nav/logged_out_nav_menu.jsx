import React from 'react';
import SignupFormContainer from './../session/signup_form_container';
import LoginFormContainer from './../session/login_form_container';
import './nav_modals.css';

class LoggedOutNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.activeModal = null;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(id) {
    if (this.activeModal === id ||
      document.getElementById("login-modal").className.split(' ')[1] === "show-session-modal") {
      this.closeModal(id);
      this.activeModal = null;
      this.toggleOverlay();
    } else if (this.activeModal === null) {
      this.activeModal = id;
      this.openModal(id);
      this.toggleOverlay();
    } else {
      this.closeModal(this.activeModal);
      this.activeModal = id;
      this.openModal(id);
    }
  };

  closeModal(id) {
    let modal = document.getElementById(id) || document.getElementById("login-modal");
    modal.classList.remove('show-session-modal');
  }

  openModal(id) {
    let modal = document.getElementById(id);
    modal.classList.add('show-session-modal');
  }

  toggleOverlay() {
    let modalUnderlay = document.getElementById("modal-underlay");
    modalUnderlay.classList.toggle('show-modal-underlay');
  }

  render() {
    return (
      <div className="logged-out-nav-menu">
        <div className="nav-menu-buttons">
          <button className="nav-menu-button" onClick={() => this.handleClick("signup-modal")}>Signup</button>
          <button className="nav-menu-button" onClick={() => this.handleClick("login-modal")}>Login</button>
        </div>
        <div className="session-modals">
          
            <div id="signup-modal" className="signup-modal">
              <button className="close-modal-button" onClick={() => this.handleClick("signup-modal")}> &#215;</button>
              <SignupFormContainer handleClick={this.handleClick}/>
            </div>
  
            <div id="login-modal" className="login-modal">
              <button className="close-modal-button" onClick={() => this.handleClick("login-modal")}> &#215;</button>
              <LoginFormContainer handleClick={this.handleClick}/>
            </div>
            <div onClick={() => this.handleClick(this.activeModal)} id="modal-underlay"></div>
        </div>
      </div>
    );
  }
}

export default LoggedOutNavMenu;