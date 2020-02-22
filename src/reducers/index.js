import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  login: loginReducer
});
