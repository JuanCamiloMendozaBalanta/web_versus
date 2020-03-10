//REACT
import React, { PureComponent } from 'react';

//STYLE
import './settings.scss';

//HOC
import InternalSection from '../hocs/internalSection/internalSection';

//COMPONENTS
import Roles from '../roles/roles';

class Settings extends PureComponent {
  render() {
    const WrapRoles = InternalSection(Roles, 'Roles');
    return (
      <div className="Wrap Settings-box">
        <WrapRoles />
      </div>
    );
  }
}

export default Settings;
