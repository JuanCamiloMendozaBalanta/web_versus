const ERROR = 'ERROR';

const showError = error => {
  return {
    type: ERROR,
    payload: error
  };
};
module.exports = {
  showError,
  ERROR
};
