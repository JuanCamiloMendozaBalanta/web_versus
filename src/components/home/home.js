//REACT
import React, { PureComponent } from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';
import history from '../../history';

//UTILS
import { routes } from '../../utils';

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
  constructor(props) {
    super(props);
    this.state = {
      routes,
      user: JSON.parse(localStorage.getItem('user'))
    };
  }
  setCurrentRoute = async route => {
    const { routes } = this.state;
    const newRoutes = routes.map(ele => {
      if (ele.route === route) {
        ele.state = 1;
      } else {
        ele.state = 0;
      }
      return ele;
    });
    this.setState({
      routes: newRoutes
    });
    await history.push(`/${route}`);
  };

  render() {
    const { routes, user } = this.state;
    return (
      <div className="Home-box">
        {user && <Nav routes={routes} setCurrentRoute={this.setCurrentRoute} />}
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={user ? Dashboard : Login} />
          <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route exact path="/settings" component={RequireAuth(Settings)} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        {user && <Profile user={user} />}
      </div>
    );
  }
}

export default Home;
