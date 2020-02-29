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
        const { token, player } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('player', JSON.stringify(player));
        dispatch({
          type: LOGIN,
          payload: player
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };
};
