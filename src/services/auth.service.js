import axios from "axios";
import { setStorage } from "../utils/ENV_VAR";

const API_URL = "http://localhost:3001/api/v1/user/";

const login = (email, password, remember) => {
  return axios.post(`${API_URL}login`, { email, password }).then((response) => {
    if (response.data.body.token) {
      if (remember) {
        localStorage.setItem("userToken", response.data.body.token);
      } else {
        sessionStorage.setItem("userToken", response.data.body.token);
      }
    }
    return response.data;
  });
};

const logout = () => {
  const storage = setStorage();
  storage.removeItem("userToken");
};

const authService = {
  login,
  logout,
};

export default authService;
