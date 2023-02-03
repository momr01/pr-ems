import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../auth/authSlice";
import routes from "../helpers/routes";

// function PrivateRoute({ children }) {
//   const token = useSelector(selectCurrentToken);

//   if (!token) {
//     return <Navigate to={routes.login} />;
//   }
//   return children;
// }

function PrivateRoute() {
  const token = useSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to={routes.login} />;
  }
  return <Outlet />;
}
export default PrivateRoute;
