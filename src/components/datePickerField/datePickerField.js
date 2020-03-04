//REACT
import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import esLocale from 'moment/locale/es';
import moment from 'moment';

//STYLE
import './datePickerField.scss';

moment.locale('es', esLocale);

const DatePickerField = props => {
  const { label, input, disabled, placeholder, meta } = props;
  const { touched, error, warning } = meta;

  const [focused, setFocused] = useState(false);

  const onFocusChange = value => {
    const { focused } = value;
    setFocused(focused);
    const { input } = props;
    input.onFocus(value);
  };

  const formatDates = value => (value ? moment(value) : null);

  const normalizeDates = value => (value ? value.format('YYYY-MM-DD') : null);

  return (
    <div className="DatePickerField-box">
      <label className="Form-info-label">{label}</label>
      <React.Fragment>
        <SingleDatePicker
          showClearDate={true}
          showDefaultInputIcon={true}
          displayFormat="YYYY-MM-DD"
          numberOfMonths={1}
          disabled={disabled}
          placeholder={placeholder}
          date={input.value}
          onDateChange={input.onChange}
          focused={focused}
          onFocusChange={onFocusChange}
          id={input.name}
          parse={normalizeDates}
          format={formatDates}
        />
      </React.Fragment>
      {touched &&
        ((error && <span className="Form-info-error">{error}</span>) ||
          (warning && <span className="Form-info-warning">{warning}</span>))}
    </div>
  );
};
export default DatePickerField;
