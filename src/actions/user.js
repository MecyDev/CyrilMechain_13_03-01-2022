import { USER_PROFILE, SET_MESSAGE } from "./types";

import UserService from "../services/user.service";

export const userProfile = () => (dispatch) => {
  return UserService.getUserProfile().then(
    (data) => {
      dispatch({
        type: USER_PROFILE,
        payload: { user: data.data.body },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
