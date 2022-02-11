import { USER_PROFILE, LOGOUT } from "../actions/types";

const initialState = { user: {} };

export default function userProfile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE:
      return {
        ...state,
        user: payload.user,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
