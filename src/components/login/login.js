//REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//STYLE
import './login.scss';

//LIBRARIES
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  responseGoogle = response => {
    console.log('===>', response);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login-box">
        <div className="Wrap">
          <div className="Form-box">
            <div className="Form-title">
              <div className="Form-title-welcome">Welcome to</div>
              <div className="Form-title-versus">versus</div>
            </div>
            <form className="Form-info">
              <label className="Form-info-label">Email</label>
              <input
                className="Form-info-input"
                id="email"
                type="email"
                value={email}
                placeholder="milo@versus.com"
              />
              <label className="Form-info-label">Password</label>
              <input
                className="Form-info-input"
                id="password"
                type="password"
                value={password}
                placeholder="........"
              />
              <button className="Form-info-button" type="submit">
                LOGIN
              </button>
              <GoogleLogin
                clientId="626485962471-pfovkpdk1h19brtirr8e7q95thbhbh4v.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                    className="Form-info-button-google"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    LOGIN WITH GOOGLE
                  </button>
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            </form>
            <div className="Form-singup">
              <div className="Form-sigup-text">Don't have an account ? </div>
              <Link className="Form-sigup-link" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
