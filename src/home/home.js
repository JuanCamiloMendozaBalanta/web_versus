//REACT
import React from "react";

//ROUTES
import {Switch, Route} from "react-router-dom";

//COMPONENTS
import Login from '../login/login'
import Signup from '../signup/signup'

const Home = () => {
  return <div className="Home-box">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </div>;

};

export default Home;
