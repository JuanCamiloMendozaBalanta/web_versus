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
  const { label, input, placeholder, meta } = props;
  const { touched, error, warning } = meta;

  const [focused, setFocused] = useState(false);

  const onFocusChange = value => {
    const { focused } = value;
    setFocused(focused);
    const { input } = props;
    input.onFocus(value);
  };

  const getDate = value => {
    return value && value !== '' ? moment(value) : moment();
  };

  const isBlocked = day => {
    return moment(day).isAfter(moment());
  };

  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <select
            value={month.month()}
            onChange={e => onMonthSelect(month, e.target.value)}
          >
            {moment.months().map((label, value) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={month.year()}
            onChange={e => onYearSelect(month, e.target.value)}
          >
            <option value={moment().year() - 1}>Last year</option>
            <option value={moment().year()}>{moment().year()}</option>
            <option value={moment().year() + 1}>Next year</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="DatePickerField-box">
      <label className="Form-info-label">{label}</label>
      <React.Fragment>
        <SingleDatePicker
          showClearDate={true}
          showDefaultInputIcon={true}
          displayFormat="YYYY-MM-DD"
          numberOfMonths={1}
          placeholder={placeholder}
          date={getDate(input.value)}
          onDateChange={input.onChange}
          focused={focused}
          onFocusChange={onFocusChange}
          id={input.name}
          enableOutsideDays={false}
          isOutsideRange={day => isBlocked(day)}
          renderMonthElement={renderMonthElement}
        />
      </React.Fragment>
      {touched &&
        ((error && <span className="Form-info-error">{error}</span>) ||
          (warning && <span className="Form-info-warning">{warning}</span>))}
    </div>
  );
};
export default DatePickerField;
