import { SIGNUP } from '../../actions/signup';
const INITIAL_STATE = { user: {} };
export const signupReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP:
      return { ...state, user: payload };
    default:
      return state;
  }
};
