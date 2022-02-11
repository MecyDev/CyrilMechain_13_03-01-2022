import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/auth";

function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [emptyInput, setEmptyInput] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      return setEmptyInput("username or password are empty");
    } else {
      setEmptyInput("");
      dispatch(login(username, password, remember)).then((response) => {
        window.location.reload();
      });
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          defaultChecked={remember}
          onChange={(e) => setRemember(!remember)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <p>
        {message}
        {emptyInput}
      </p>
      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>
    </form>
  );
}

export default Loginform;
