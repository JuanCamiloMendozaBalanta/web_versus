//REACT
import React from "react";

//STYLE
import "./login.scss";

//IMAGES
import logo2 from '../assets/logo2.jpg'

class Login extends React.PureComponent {
    render() {
        return <div className="Login-box">
            <div className="Left">
            <img className="Left-logo" src={logo2} alt="logo"/>
            </div>
            <div className="Right"></div>
        </div>
    }

}

export default Login