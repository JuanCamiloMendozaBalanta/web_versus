//REACT
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actionLogin from '../../actions/login';

//STYLE
import './login.scss';

//LIBRARIES
import { GoogleLogin } from 'react-google-login';

//COMPONENTS
import CustomField from '../customField/customField';

//CONFIG
import { googleClienteId } from '../../configuration';

//UTILS
import { validateEmail } from '../../utils/index';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  } else if (!values.password) {
    errors.password = 'password is required';
  }
  return errors;
};

const Login = props => {
  const { handleSubmit, submitting, login } = props;
  const responseGoogle = response => {
    console.log('===>', response);
  };

  const onSubmit = async values => {
    const res = await login(values);
    console.log('===>', res);
  };

  return (
    <div className="Login-box">
      <div className="Wrap">
        <div className="Form-box">
          <div className="Form-title">
            <div className="Form-title-welcome">Welcome to</div>
            <div className="Form-title-versus">versus</div>
          </div>
          <form className="Form-info" onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="milo@versus.co"
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
              LOGIN
            </button>
            <GoogleLogin
              clientId={googleClienteId}
              render={renderProps => (
                <button
                  className="Form-info-button-google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  LOGIN WITH GOOGLE
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          </form>
          <div className="Form-singup">
            <div className="Form-sigup-text">Don't have an account ? </div>
            <Link className="Form-sigup-link" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  //mapDispatchToProps
  actionLogin
)(
  reduxForm({
    form: 'loginForm',
    validate
  })(Login)
);
