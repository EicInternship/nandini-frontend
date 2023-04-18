import "./App.css";
import Admin from "./Component/Admin";
import LoginPage from "./Component/LoginPage";
import SignupPage from "./Component/SignupPage";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Dashboard from "./Home/Dashboard";

function App() {
  const location = useLocation();
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
