import "./App.css";
import React, { Suspense, lazy } from "react";
import Admin from "../src/component/Admin";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import { Route, Link, Routes } from "react-router-dom";
const Home = lazy(() => import("./home/Home"));
const Footer = lazy(() => import("./home/Footer"));
// import { ErrorPage } from "./home/error/ErrorPage";
// import CustomerList from "./home/customer/CustomerList";
// import AddCustomer from "./home/customer/AddCustomer";
// import DeleteCustomer from "./home/customer/DeleteCustomer";
// import UpdateCustomer from "./home/customer/UpdateCustomer";
// import { Catalog } from "./home/Catalog";
// import { Order } from "./home/Order";
// import { Marketing } from "./home/Marketing";
// import { Inbox } from "./home/Inbox";
// import { DashboardPage } from "./home/dashboard/DashboardPage";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Please Wait...</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div>Footer is Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
export default App;
