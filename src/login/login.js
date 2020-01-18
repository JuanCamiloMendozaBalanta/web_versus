//REACT
import React from "react";

//STYLE
import "./login.scss";

//LIBRARIES
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const responseGoogle = response => {
    console.log("===>", response);
  };
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
            <input className="Form-info-input" id="password" type="password" />
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
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            >
              LOGIN IN WITH GOOGLE
            </GoogleLogin>
          </form>
          <div className="Form-singup">
            <div className="Form-sigup-text">Dont have an account ? </div>
            <a className="Form-sigup-link">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
