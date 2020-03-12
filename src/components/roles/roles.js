//REACT
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

//ACTIONS
import * as actionRoles from '../../actions/roles';

//STYLE
import './roles.scss';

class Roles extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      roles: []
    };
  }

  componentDidMount = async () => {
    const { getRoles, user } = this.props;
    await getRoles(user.email);
  };

  initRoles = async () => {};

  render() {
    const { roles } = this.props;
    return (
      <div className="Roles-box">
        <header className="Roles-header">
          <p className="Roles-descriprion">Manage your roles</p>
          <a className="Roles-add-role" href="/home">
            <span className="Roles-add-text">Add role</span>
            <i className={`material-icons`}>arrow_forward</i>
          </a>
        </header>
        <ul className="Roles-content">
          {roles.map((item, i) => {
            return (
              <li
                className={`Roles-role ${item.state ? 'isSelected' : ''}`}
                key={i}
              >
                <span className="Roles-role-code">{item.code}</span>
                <span className="Roles-role-name">{item.name}</span>
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
    roles: state.roles.roles ? state.roles.roles : null,
    user: state.auth.user ? state.auth.user : null
  };
};

export default connect(mapStateToProps, actionRoles)(Roles);
