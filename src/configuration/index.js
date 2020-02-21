const apiUrlDev = process.env.REACT_APP_API_URL_DEV;
const apiUrlProd = process.env.REACT_APP_API_URL_DEV;
const googleClienteId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const environment = process.env.REACT_APP_API_URL_ENVIRONMENT;

const config = {
  apiUrl: environment === 'DEV' ? apiUrlDev : apiUrlProd,
  googleClienteId
};

module.exports = config;
