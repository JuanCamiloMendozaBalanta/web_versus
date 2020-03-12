import React, { Component } from 'react';

export default function showComponent(ComposedComponent) {
  class Show extends Component {
    render() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  return Show;
}
