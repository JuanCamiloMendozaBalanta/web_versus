//REACT
import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTIONS
import * as actionRoles from '../../actions/roles';

//STYLE
import './rolesOverview.scss';

class RolesOverview extends Component {
  componentDidMount = async () => {
    const { getRoles, roles } = this.props;
    if ((roles.length === 0) === true) {
      const user = JSON.parse(localStorage.getItem('user'));
      await getRoles(user.email);
    }
  };

  render() {
    const { roles } = this.props;
    console.log('===>', roles);
    return (
      <div className="RolesOverview-box">
        <header className="RolesOverview-header">
          <p className="RolesOverview-descriprion">Manage your roles</p>
          <a className="RolesOverview-add-role" href="/roles">
            <span className="RolesOverview-add-text">Add roles</span>
            <i className={`material-icons`}>arrow_forward</i>
          </a>
        </header>
        <ul className="RolesOverview-content">
          {roles.map((item, i) => {
            return (
              <li
                className={`RolesOverview-role ${
                  item.state ? 'isSelected' : ''
                }`}
                key={i}
              >
                <span className="RolesOverview-role-code">{item.code}</span>
                <span className="RolesOverview-role-name">{item.name}</span>
                <i className={`material-icons`}>arrow_forward</i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roles: state.roles.roles ? state.roles.roles : null
  };
};

export default connect(mapStateToProps, actionRoles)(RolesOverview);
