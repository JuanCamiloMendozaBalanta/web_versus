import axios from 'axios';
import history from '../../history';

const { apiUrl } = require('../../configuration');

export const AUTH = 'AUTH';

export const login = info => {
  return dispatch => {
    axios
      .post(`${apiUrl}/login`, info)
      .then(response => {
        const { data } = response;
        const { token, user } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: AUTH,
          payload: user
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const signup = info => {
  return function(dispatch) {
    axios
      .post(`${apiUrl}/user`, info)
      .then(response => {
        const { data } = response;
        const { token, user } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: AUTH,
          payload: user
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const reloadUser = () => {
  return function(dispatch) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        dispatch({
          type: AUTH,
          payload: user
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
