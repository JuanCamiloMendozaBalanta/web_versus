import axios from 'axios';
import history from '../../history';

const { apiUrl } = require('../../configuration');

export const SIGNUP = 'SIGNUP';

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
          type: SIGNUP,
          payload: user
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };
};
