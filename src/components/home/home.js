//REACT
import React, { Component } from 'react';

//ROUTES
import { Switch, Route, Redirect } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';

//COMPONENTS
import Login from '../login/login';
import Signup from '../signup/signup';
import Dashboard from '../dashboard/dashboard';

class Home extends Component {
  render() {
    const player = localStorage.getItem('player');
    console.log('===>', player);
    return (
      <div className="Home-box">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/" component={player ? Dashboard : Login} />
        </Switch>
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
