import { LOGIN } from '../../actions/login';
const INITIAL_STATE = { user: {} };
export const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, user: payload };
    default:
      return state;
  }
};
