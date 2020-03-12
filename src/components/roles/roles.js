//REACT
import React, { PureComponent } from 'react';

//STYLE
import './roles.scss';

class Roles extends PureComponent {
  render() {
    return (
      <div className="Roles-box">
        <header className="Roles-header">
          <p className="Roles-descriprion">Manage your roles</p>
          <a className="Roles-add-role" href="/home">
            <span className="Roles-add-text">Add role</span>
            <i className={`material-icons`}>arrow_forward</i>
          </a>
        </header>
      </div>
    );
  }
}

export default Roles;
