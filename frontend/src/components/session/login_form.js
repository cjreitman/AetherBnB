import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderFieldErrors = this.renderFieldErrors.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  guestLogIn(e) {
    e.preventDefault();

    let user = {
      email: 'valery@gmail.com',
      password: 'california'
    };

    this.props.login(user);
  }

  renderFieldErrors(field) {
    if(this.state.errors[field]) {
      return (
        <div className="error-div">
          <h5 className="field-error">{this.state.errors[field]}</h5>
        </div>
      )
    } else {
      return (
        <div className="error-div"/>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <h1 className="session-modal-header">Log in to continue</h1>
            <br/>
            <input type="text"
              className="modal-input-field"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            {this.renderFieldErrors("email")}
       
            <input type="password"
              className="modal-input-field"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            {this.renderFieldErrors("password")}
  
            <input className="session-modal-submit-button" type="submit" value="Submit" />
            <div className="login-modal-lower-text">
              <h4>Don't have an account?</h4><h4 onClick={() => this.props.handleClick("signup-modal")} className="switch-between-modals">Sign up</h4>
            </div>
            <div className="guest-login-container">
              <button className="guest-login" onClick={this.guestLogIn}> Guest Log In </button>
            </div>
          </div>

        </form>
        <div onClick={() => this.props.handleClick("login-modal")} className="modal-underlay"></div>
      </div>
      
    );
  }
}

export default withRouter(LoginForm);