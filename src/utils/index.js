const getHeader = () => {
  return {
    headers: { Authorization: `${localStorage.getItem('token')}` }
  };
};

const validateEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const routes = [
  {
    state: 1,
    route: 'dashboard'
  },
  {
    state: 0,
    route: 'teams'
  },
  {
    state: 0,
    route: 'statistics'
  },
  {
    state: 0,
    route: 'calendar'
  },
  {
    state: 0,
    route: 'settings'
  }
];
module.exports = {
  getHeader,
  validateEmail,
  routes
};
