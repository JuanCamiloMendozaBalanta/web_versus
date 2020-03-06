import axios from 'axios';
import history from '../../history';

const { apiUrl } = require('../../configuration');

export const LOGIN = 'LOGIN';

export const login = info => {
  return dispatch => {
    axios
      .post(`${apiUrl}/login`, info)
      .then(response => {
        const { data } = response;
        const { token, user } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/dashboard');
        dispatch({
          type: LOGIN,
          payload: user
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
