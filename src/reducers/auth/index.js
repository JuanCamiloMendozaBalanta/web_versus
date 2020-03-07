import { AUTH } from '../../actions/auth';
const INITIAL_STATE = { user: {} };
export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH:
      return { ...state, user: payload };
    default:
      return state;
  }
};
