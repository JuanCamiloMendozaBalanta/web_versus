import React, { Component } from 'react';
import history from '../../../../history';

//STYLE
import './requireAuth.scss';

export default function requireAuth(ComposedComponent, title) {
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
      return (
        <div className="Wrap-route">
          {title && <h1 className="Wrap-route-title">{title}</h1>}
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return Authentication;
}
