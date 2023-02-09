import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
// import "./charts/ChartjsConfig";
import "./charts/custom/ChartjsConfig";

import {
  AddPlant,
  AddShift,
  AddUser,
  Dashboard,
  Login,
  Maintenance,
  NotFound,
  ProfileNotifications,
  ProfilePanel,
  Reports,
  ResetPassword,
  Users,
} from "./pages/custom";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";
import routes from "./helpers/routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path={routes.index} element={<Login />} />
          <Route exact path={routes.login} element={<Login />} />
          <Route exact path={routes.resetPwd} element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route exact path={routes.dashboard} element={<Dashboard />} />
          <Route exact path={routes.maintenance} element={<Maintenance />} />
          <Route exact path={routes.reports} element={<Reports />} />
          <Route exact path={routes.users} element={<Users />} />
          <Route exact path={routes.addUser} element={<AddUser />} />
          <Route exact path={routes.addPlant} element={<AddPlant />} />
          <Route exact path={routes.addShift} element={<AddShift />} />
          <Route exact path={routes.profile} element={<ProfilePanel />} />
          <Route
            exact
            path={routes.notifSettings}
            element={<ProfileNotifications />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
