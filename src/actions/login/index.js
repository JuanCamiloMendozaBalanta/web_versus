import axios from 'axios';
const { apiUrl } = require('../../../configuration');
const { showError } = require('../error');

const LOGIN = 'LOGIN';

const login = data => {
  axios
    .post(`${apiUrl}/loing`, data)
    .then(response => {
      const { data } = response;
      localStorage.setItem('token', data);
    })
    .catch(error => {
      dispatch(showError(`Error en el login`));
    });
};

const getHeader = () => {
  return {
    headers: { Authorization: `${localStorage.getItem('token')}` }
  };
};

module.exports = {
  login,
  getHeader
};
