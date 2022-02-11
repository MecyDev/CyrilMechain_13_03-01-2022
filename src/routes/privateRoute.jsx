import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const isLog = useSelector((state) => state.auth.isLoggedIn);

  return isLog ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
