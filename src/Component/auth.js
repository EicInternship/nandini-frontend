import React from "react";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  const adminlogin = (admin) => {
    setAdmin(admin);
  };
  const adminlogout = () => {
    setAdmin(null);
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, admin, adminlogin, adminlogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
