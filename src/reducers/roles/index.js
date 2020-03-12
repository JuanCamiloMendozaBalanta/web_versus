import { ROLES } from '../../actions/roles';
const INITIAL_STATE = { roles: [] };
export const roles = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROLES:
      console.log('===>', payload);
      return { ...state, roles: payload };
    default:
      return state;
  }
};
