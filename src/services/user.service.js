import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3001/api/v1/user/";

const getUserProfile = () => {
  return axios.post(`${API_URL}profile`, {}, { headers: authHeader() });
};

const saveUserProfile = (firstName, lastName) => {
  return axios.put(
    `${API_URL}profile`,
    { firstName, lastName },
    {
      headers: authHeader(),
    }
  );
};

const userService = {
  getUserProfile,
  saveUserProfile,
};

export default userService;
