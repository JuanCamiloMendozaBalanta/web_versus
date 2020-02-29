//REACT
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actionSignup from '../../actions/signup';
import { Link } from 'react-router-dom';

//LIBRARIES
import { GoogleLogin } from 'react-google-login';

//COMPONENTS
import CustomField from '../customField/customField';

//UTILS
import { validateEmail } from '../../utils/index';

//STYLE
import './signup.scss';

const validate = values => {
  console.log('===>', values);
  let errors = {};
  if (!values.fullname) {
    errors.fullname = 'fullname is required';
  } else if (!values.email) {
    errors.email = 'email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  } else if (!values.password) {
    errors.password = 'password is required';
  }
  console.log('===>', errors);
  return errors;
};

const Signup = props => {
  const { handleSubmit, submitting, signup } = props;
  const responseGoogle = response => {
    console.log('===>', response);
  };
  const onSubmit = async values => {
    await signup(values);
  };
  return (
    <div className="Signup-box">
      <div className="Wrap">
        <div className="Form-box">
          <div className="Signup-header">
            <div className="Signup-header-gettingStarted">Getting Started</div>
            <Link className="Signup-header-aha" to="/login">
              Already have an account
            </Link>
          </div>
          <form className="Form-info" onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="fullname"
              label="Full name"
              type="text"
              placeholder=""
              component={CustomField}
            />
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="milo@versus.co"
              component={CustomField}
            />
            <Field
              name="username"
              label="Username"
              type="text"
              placeholder=""
              component={CustomField}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              placeholder="........"
              component={CustomField}
            />
            <button
              disabled={submitting}
              className="Form-info-button"
              type="submit"
            >
              SIGNUP
            </button>
            <GoogleLogin
              clientId="626485962471-pfovkpdk1h19brtirr8e7q95thbhbh4v.apps.googleusercontent.com"
              render={renderProps => (
                <button
                  className="Form-info-button-google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  SIGUP WITH GOOGLE
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  actionSignup
)(
  reduxForm({
    form: 'signupForm',
    validate
  })(Signup)
);
