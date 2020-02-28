import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { loginReducer } from './login';
import { signupReducer } from './signup';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  login: loginReducer,
  signup: signupReducer
});
