import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function LoadGuard({ id, children }) {
  const access = useSelector((state) => state.authReducer.access) || true;

  //TODO: Fix the logic when access is obtained
  if (!access) {
    return <Redirect to="/404" />;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
