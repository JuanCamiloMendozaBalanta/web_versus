import { USER } from '../../actions/login';

export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
