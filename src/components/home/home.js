//REACT
import React from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';

//COMPONENTS
import Login from '../login/login';
import Signup from '../signup/signup';
import Dashboard from '../dashboard/dashboard';

const Home = () => {
  return (
    <div className="Home-box">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Home;
