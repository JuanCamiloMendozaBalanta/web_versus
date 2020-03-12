import axios from 'axios';

const { apiUrl } = require('../../configuration');
const { getHeader } = require('../../utils');
export const ROLES = 'ROLES';

export const getRoles = email => {
  return dispatch => {
    axios
      .get(`${apiUrl}/role?email=${email}`, getHeader())
      .then(response => {
        const { data } = response;
        dispatch({
          type: ROLES,
          payload: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
