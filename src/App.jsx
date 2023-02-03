import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
import "./charts/ChartjsConfig";

import {
  Dashboard,
  Login,
  Maintenance,
  NotFound,
  Reports,
  ResetPassword,
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
        {/* <Route
          exact
          path={routes.index}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> */}

        {/* <Route
          exact
          path={routes.resetPwd}
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        /> */}

        {/* <Route
          exact
          path={routes.login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> */}

        {/* <Route
          exact
          path={routes.dashboard}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {/* <Route
          exact
          path={routes.maintenance}
          element={
            <PrivateRoute>
              <Maintenance />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={routes.reports}
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        /> */}

        <Route element={<PublicRoute />}>
          <Route exact path={routes.index} element={<Login />} />
          <Route exact path={routes.login} element={<Login />} />
          <Route exact path={routes.resetPwd} element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route exact path={routes.dashboard} element={<Dashboard />} />
          <Route exact path={routes.maintenance} element={<Maintenance />} />
          <Route exact path={routes.reports} element={<Reports />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
