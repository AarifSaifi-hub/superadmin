import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { dashboardLayoutRoutes, authLayoutRoutes } from "./index";

import { DashBoard } from "./index";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import AuthLayout from "../pages/auth/AuthLayout";

import Page404 from "../pages/error/Page404";

const childRoutes = (Layout, routes) =>
  routes.map(({ component: Component, children, path, id }, index) => {
    return children ? (
      children.map((child, index) => {
        const ElementComponent = child.component || React.Fragment;
        return (
          <Route
            key={index}
            path={child.path}
            exact
            render={(props) => (
              <Layout>
                <ElementComponent id={child.id} {...props} />
              </Layout>
            )}
          />
        );
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Layout>
            <Component id={id} {...props} />
          </Layout>
        )}
      />
    ) : null;
  });

const Routes = () => (
  <Router>
    <Switch>
      {/* Child routes takes in layout and the routes in those layouts. */}
      {childRoutes(DashboardLayout, [DashBoard, ...dashboardLayoutRoutes])}
      {childRoutes(AuthLayout, authLayoutRoutes)}
      <Route
        render={() => (
          // If nothing then just render 404
          <AuthLayout>
            <Page404 />
          </AuthLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
