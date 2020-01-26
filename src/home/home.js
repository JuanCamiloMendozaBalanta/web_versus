//REACT
import React from "react";

//ROUTES
import {Switch, Route} from "react-router-dom";

//COMPONENTS
import Login from '../login/login'
const Home = () => {
  return <div className="Home-box">
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </div>;

};

export default Home;
