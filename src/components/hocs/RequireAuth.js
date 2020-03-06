import React, { Component } from 'react';
import history from '../../history';

export default function requireAuth(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount = () => {
      const user = localStorage.getItem('user');
      if (!user) {
        history.push('/login');
        return;
      }
    };

    componentWillUpdate = nextProps => {
      const user = localStorage.getItem('user');
      if (user) {
        history.push('/login');
      }
    };

    render() {
      const user = localStorage.getItem('user');
      if (!user) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authentication;
}
