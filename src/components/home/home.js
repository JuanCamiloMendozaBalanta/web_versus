//REACT
import React, { PureComponent } from 'react';

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
import RequireAuth from '../hocs/auth/requireAuth';

//STYLE
import './home.scss';
class Home extends PureComponent {
  render() {
    return (
      <div className="Home-box">
        <Nav />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route exact path="/settings" component={RequireAuth(Settings)} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        <Profile />
      </div>
    );
  }
}

export default Home;
