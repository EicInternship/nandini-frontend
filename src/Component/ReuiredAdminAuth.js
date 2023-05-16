import React from "react";
import { useAdminAuth } from "./AdminAuth";

import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { replace } from "formik";

export const RequiredAdminAuth = ({ children }) => {
  const auth = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/Admin" state={{ path: location.pathname }} />;
    // navigate("/LoginPage")
  }

  return children;
};
