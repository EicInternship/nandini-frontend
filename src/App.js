import "./App.css";
import React from "react"
import Admin from "./component/Admin";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContainer from "./home/HeaderContainer";
import Home from "./home/Home";
import Footer from "./home/Footer";

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
