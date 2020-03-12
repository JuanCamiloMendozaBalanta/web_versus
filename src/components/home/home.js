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
import {
  RequireAuthHoc,
  RequireNoAuthHoc,
  ShowComponentHoc
} from '../hocs/auth';

//STYLE
import './home.scss';
class Home extends PureComponent {
  render() {
    const WrapNav = ShowComponentHoc(Nav);
    const WrapProfile = ShowComponentHoc(Profile);
    return (
      <div className="Home-box">
        <WrapNav />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/dashboard"
            component={RequireAuthHoc(Dashboard)}
          />
          <Route exact path="/settings" component={RequireAuthHoc(Settings)} />
          <Route exact path="/login" component={RequireNoAuthHoc(Login)} />
          <Route component={Login} />
        </Switch>
        <WrapProfile />
      </div>
    );
  }
}

export default Home;
