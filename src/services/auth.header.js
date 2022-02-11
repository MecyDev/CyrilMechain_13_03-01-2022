import { setStorage } from "../utils/ENV_VAR";

export default function authHeader() {
  const storage = setStorage();
  const userToken = storage.getItem("userToken");

  if (userToken) {
    return { Authorization: `Bearer ${userToken}` };
  } else {
    return {};
  }
}
