const getHeader = () => {
  return {
    headers: { Authorization: `${localStorage.getItem('token')}` }
  };
};
const validateEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

module.exports = {
  getHeader,
  validateEmail
};
