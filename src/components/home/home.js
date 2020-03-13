//REACT
import React, { useState } from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';

//COMPONENTS
import Login from '../login/login';
import Signup from '../signup/signup';
import Dashboard from '../dashboard/dashboard';
import Nav from '../nav/nav';
import Profile from '../profile/profile';
import Settings from '../settings/settings';

//HOC
import { RequireAuthHoc, RequireNoAuthHoc } from '../hocs/auth';

//STYLE
import './home.scss';
const Home = props => {
  const [show, setShow] = useState(false);

  const WrapSettings = () => {
    return <Settings setShow={setShow} />;
  };
  return (
    <div className="Home-box">
      {show && <Nav />}
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={RequireAuthHoc(Dashboard)} />
        <Route
          exact
          path="/settings"
          component={RequireAuthHoc(WrapSettings)}
        />
        <Route exact path="/login" component={RequireNoAuthHoc(Login)} />
        <Route component={Login} />
      </Switch>
      {show && <Profile />}
    </div>
  );
};

export default Home;
