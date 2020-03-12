import React, { Component } from 'react';
import history from '../../../history';

export default function requireNoAuth(ComposedComponent) {
  class NoAuthentication extends Component {
    componentWillMount = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        history.push('/dashboard');
        return;
      }
    };

    componentWillUpdate = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        history.push('/dashboard');
        return;
      }
    };

    render() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  return NoAuthentication;
}
