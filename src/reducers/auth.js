import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";
import { setStorage } from "./../utils/ENV_VAR";

const storage = setStorage();
const userToken = storage.getItem("userToken");

const initialState = userToken
  ? { isLoggedIn: true, userToken }
  : { isLoggedIn: false, userToken: null };

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userToken: payload.userToken,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userToken: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userToken: null,
      };
    default:
      return state;
  }
}
