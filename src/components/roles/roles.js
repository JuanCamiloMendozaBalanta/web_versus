//REACT
import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

//ACTIONS
import * as actionRoles from '../../actions/roles';

//STYLE
import './roles.scss';

//COMPONENTS
import RoleCard from '../roleCard/roleCard';

class Roles extends PureComponent {
  componentDidMount = async () => {
    const { setShow, getRoles, roles } = this.props;
    if ((roles.length === 0) === true) {
      const user = JSON.parse(localStorage.getItem('user'));
      await getRoles(user.email);
    }
    setShow(true);
  };
  render() {
    const { roles } = this.props;
    return (
      <div className="Wrap Roles-box">
        <ul className="Roles-content">
          {roles.map((item, i) => {
            return <RoleCard role={item} key={i} />;
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

export default connect(mapStateToProps, actionRoles)(Roles);
