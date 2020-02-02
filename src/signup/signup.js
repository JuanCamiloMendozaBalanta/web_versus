//REACT
import React from "react";

//STYLE
import "./signup.scss";

//LIBRARIES
import { GoogleLogin } from "react-google-login";


const Signup = () => {
  const responseGoogle = response => {
    console.log("===>", response);
  };
  return (
    <div className="Signup-box">
      <div className="Wrap">
        <div className="Form-box">
          <div className="Signup-header">
            <div className="Signup-header-gettingStarted">Getting Started</div>
            <a className="Signup-header-aha">Already have an account</a>
          </div>
          <form className="Form-info">
            <label className="Form-info-label">Full name</label>
            <input className="Form-info-input" id="fullname" type="text" />
            <label className="Form-info-label">Email</label>
            <input className="Form-info-input" id="email" type="email" />
            <label className="Form-info-label">Username</label>
            <input className="Form-info-input" id="username" type="text" />
            <label className="Form-info-label">Password</label>
            <input className="Form-info-input" id="password" type="password" />
            <button className="Form-info-button" type="submit">
              SIGNUP
            </button>
            <GoogleLogin
              clientId="626485962471-pfovkpdk1h19brtirr8e7q95thbhbh4v.apps.googleusercontent.com"
              render={renderProps => (
                <button
                  className="Form-info-button-google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  SIGUP WITH GOOGLE
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            >
            </GoogleLogin>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Signup;
