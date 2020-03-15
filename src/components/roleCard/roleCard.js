//REACT
import React, { useState } from 'react';

//COMPONENTS
import Toogle from '../toogle/toogle';

//STYLE
import './roleCard.scss';

const RoleCard = props => {
  const { role } = props;
  const [active, setActive] = useState(role.iHaveIt);

  return (
    <div className={`RoleCard-box ${active ? 'RoleCard-active' : ''}`}>
      <p className="RoleCard-code">{role.code}</p>
      <div className="RoleCard-info-bar">
        <p className="RoleCard-name">{role.name}</p>
        <p className="RoleCard-qualificcodeation">{role.code}</p>
      </div>
      <div className="RoleCard-controls">
        <Toogle active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default RoleCard;
