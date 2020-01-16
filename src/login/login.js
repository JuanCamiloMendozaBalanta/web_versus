//REACT
import React from "react";

//STYLE
import "./login.scss";

class Login extends React.PureComponent {
  render() {
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
              <input className="Form-info-input" id="email" type="email" />
              <label className="Form-info-label">Password</label>
              <input
                className="Form-info-input"
                id="password"
                type="password"
              />
              <button className="Form-info-button" type="submit">
                LOGIN
              </button>
            </form>
            <div className="Form-singup">
              <div className="Form-sigup-text">Dont have an account ? </div>
              <a className="Form-sigup-link">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
