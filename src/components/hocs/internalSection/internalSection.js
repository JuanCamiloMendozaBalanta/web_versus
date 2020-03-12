import React, { Component } from 'react';

//STYLE
import './internalSection.scss';

export default function internalSection(ComposedComponent, title) {
  class Section extends Component {
    render() {
      return (
        <section className="Internal-section-box">
          <h1 className="Internal-section-title">{title}</h1>
          <ComposedComponent {...this.props} />
        </section>
      );
    }
  }

  return Section;
}
