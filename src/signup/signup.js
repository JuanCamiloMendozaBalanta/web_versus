//REACT
import React from "react";

//STYLE
import "./signup.scss";


const Signup = () => {
  const responseGoogle = response => {
    console.log("===>", response);
  };
  return (
    <div className="Signup-box">
      <div className="Wrap">
        <div className="Signup-header">
          <div className="Signup-header-gettingStarted">Geting Started</div>
          <div className="Form-title-welcome">Already have an account</div>
        </div>
        <div className="Form-box">
        </div>
      </div>
    </div>
  );
};

export default Signup;
