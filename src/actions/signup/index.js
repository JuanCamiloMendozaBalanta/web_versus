import axios from 'axios';
import history from '../../history';

const { apiUrl } = require('../../configuration');

export const SIGNUP = 'SIGNUP';

export const signup = info => {
  return function(dispatch) {
    axios
      .post(`${apiUrl}/signup`, info)
      .then(response => {
        const { data } = response;
        const { token, player } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('player', JSON.stringify(player));
        dispatch({
          type: SIGNUP,
          payload: player
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };
};
