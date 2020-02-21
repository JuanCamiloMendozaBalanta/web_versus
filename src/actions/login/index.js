import axios from 'axios';
const { apiUrl } = require('../../configuration');

export const USER = 'USER';

export const login = async info => {
  try {
    console.log('===>', info);
    return dispatch => {
      console.log('===>', info);
      return axios
        .post(`${apiUrl}/login`, info)
        .then(response => {
          const { data } = response;
          localStorage.setItem('token', data.token);
          dispatch({
            type: USER,
            payload: data.player
          });
          return data.player;
        })
        .catch(error => {
          console.log(error);
        });
    };
  } catch (error) {
    console.log('===>', error);
  }
};
