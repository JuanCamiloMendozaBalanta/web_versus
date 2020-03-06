//REACT
import React, { PureComponent } from 'react';

//ROUTES
import { Switch, Route } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';

//UTILS
import { routes } from '../../utils';

//COMPONENTS
import Login from '../login/login';
import Signup from '../signup/signup';
import Dashboard from '../dashboard/dashboard';
import Nav from '../nav/nav';
import Profile from '../profile/profile';

//HOC
import RequireAuth from '../hocs/RequireAuth';

//STYLE
import './home.scss';
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      routes
    };
  }
  setCurrentRoute = route => {
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
  };

  render() {
    const { routes } = this.state;
    const user = localStorage.getItem('user');

    return (
      <div className="Home-box">
        {console.log('===>', user)}
        {user && <Nav routes={routes} setCurrentRoute={this.setCurrentRoute} />}
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={user ? Dashboard : Login} />
          <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        {user && <Profile user={user} />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Home);
