//REACT
import React from 'react';

//STYLE
import './customField.scss';

const CustomField = props => {
  const { input, label, type, placeholder, meta } = props;
  const { touched, error, warning } = meta;
  return (
    <div className="CustomField-box">
      <label className="Form-info-label">{label}</label>
      <input
        {...input}
        className="Form-info-input"
        id={`Field-${label}`}
        type={type}
        placeholder={placeholder}
      />
      {touched &&
        ((error && <span className="Form-info-error">{error}</span>) ||
          (warning && <span className="Form-info-warning">{warning}</span>))}
    </div>
  );
};
export default CustomField;
