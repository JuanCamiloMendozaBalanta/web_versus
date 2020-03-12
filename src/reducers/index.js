import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { authReducer } from './auth';
import { roles } from './roles';

export default combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  roles
});
