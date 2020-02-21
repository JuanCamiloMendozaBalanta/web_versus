const LOADING = 'LOADING';

const showLoading = showLoading => {
  return {
    type: LOADING,
    payload: showLoading
  };
};
module.exports = {
  showLoading
};
