import React from "react";
import { useAuth } from "./auth";

import { Navigate, useNavigate, useLocation } from "react-router-dom";

export const RequiredAdminAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!auth.admin) {
    return <Navigate to="/Admin" state={{ path: location.pathname }} />;
    // navigate("/LoginPage")
  }

  return children;
};
