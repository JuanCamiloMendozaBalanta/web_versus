//REACT
import React from "react";

//STYLE
import "./login.scss";

const Login = () => {
  const onSignIn = googleUser => {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
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
            <button
              className="Form-info-button-google g-signin2"
              onSuccess={onSignIn}
            >
              LOGIN IN WITH GOOGLE
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
};

export default Login;
