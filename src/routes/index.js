/* eslint-disable import/first */
import React from "react";

// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size
import async from "../util/Async";

import { Sliders, HardDrive } from "react-feather";

// Auth components
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/error/Page404";
import Page500 from "../pages/error/Page500";

// Dashboards components
const Dashboard = async(() => import("../pages/dashboard"));

// Dashboard components
import Blank from "../pages/dashboard/pages/Blank";
import Settings from "../pages/dashboard/pages/Settings";
import BusinessList from "../pages/BusinessList";
const Profile = async(() => import("../pages/dashboard/pages/Profile"));

export const DashBoard = {
  name: "Dashboard",
  id: "dashboard_page",
  icon: <HardDrive />,
  path: "/",
  component: Dashboard,
};

const componentRoutes = {
  name: "Components",
  id: "Components",
  icon: <Sliders />,
  children: [
    {
      id: "blank_page",
      path: "/blank",
      name: "Blank Page",
      component: Blank,
    },
    {
      id: "profile",
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      id: "settings",
      path: "/settings",
      name: "Settings",
      component: Settings,
    },

    {
      id: "businesslist",
      path: "/businesslist",
      name: "BusinessList",
      component: BusinessList,
    },
  ],
  component: null,
};

const authRoutes = {
  id: "Auth",
  children: [
    {
      id: "sign_in",
      path: "/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      id: "sign_up",
      path: "/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      id: "reset_password",
      path: "/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      id: "error_404",
      path: "/404",
      name: "404 Page",
      component: Page404,
    },
    {
      id: "error_500",
      path: "/500",
      name: "500 Page",
      component: Page500,
    },
  ],
  component: null,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [componentRoutes];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [DashBoard, componentRoutes];
