import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { authReducer } from './auth';

export default combineReducers({
  reduxFormReducer, // mounted under "form"
  auth: authReducer
});
