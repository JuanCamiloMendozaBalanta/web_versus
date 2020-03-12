import React, { Component } from 'react';
import history from '../../../history';

export default function requireAuth(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        history.push('/login');
        return;
      }
    };

    componentWillUpdate = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        history.push('/login');
      }
    };

    render() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authentication;
}
