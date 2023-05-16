import React from "react";
import { useAuth } from "./auth";

import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { replace } from "formik";

export const RequiredAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  // const navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/LoginPage" state={{ path: location.pathname }} />;
    // navigate("/LoginPage")
  }

  return children;
};
