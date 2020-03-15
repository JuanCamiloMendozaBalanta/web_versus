//REACT
import React from 'react';

//STYLE
import './toogle.scss';

const Toogle = props => {
  const { active, setActive } = props;

  const callSetActive = () => {
    const value = active ? false : true;
    setActive(value);
  };
  return (
    <label
      className={`Toogle-box ${active ? 'Toogle-active' : ''}`}
      onClick={() => callSetActive()}
    >
      <p className="Toogle-ball"></p>
    </label>
  );
};

export default Toogle;
