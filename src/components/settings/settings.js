//REACT
import React, { PureComponent } from 'react';

//STYLE
import './settings.scss';

//HOC
import InternalSection from '../hocs/internalSection/internalSection';

//COMPONENTS
import RolesOverview from '../rolesOverview/rolesOverview';

class Settings extends PureComponent {
  componentDidMount = () => {
    const { setShow } = this.props;
    setShow(true);
  };
  render() {
    const WrapRolesOverview = InternalSection(RolesOverview, 'Roles');
    return (
      <div className="Wrap Settings-box">
        <WrapRolesOverview />
      </div>
    );
  }
}

export default Settings;
