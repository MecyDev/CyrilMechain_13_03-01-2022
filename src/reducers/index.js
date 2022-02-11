import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userProfile from "./user";

export default combineReducers({
  auth,
  message,
  userProfile,
});
