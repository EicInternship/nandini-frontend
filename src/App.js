import "./App.css";
import Admin from "./Component/Admin";
import LoginPage from "./Component/LoginPage";
import SignupPage from "./Component/SignupPage";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContainer from "./Home/HeaderContainer";
import Home from "./Home/Home";
import Footer from "./Home/Footer";

function App() {
  const location = useLocation();
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
