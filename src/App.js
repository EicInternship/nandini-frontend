import "./App.css";
import Admin from "./Component/Admin";
import LoginPage from "./Component/LoginPage";
import SignupPage from "./Component/SignupPage";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home/Home";

function App() {
  const location = useLocation();
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
