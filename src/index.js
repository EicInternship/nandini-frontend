import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
// import { DashboardPage } from "./home/dashboard/DashboardPage";
// import SignupPage from "./component/SignupPage";
// import { Admin } from "./component/Admin";
// import LoginPage from "./component/LoginPage";
// import { Catalog } from "./home/Catalog";
// import { Order } from "./home/Order";
// import { Inbox } from "@mui/icons-material";
// import { Marketing } from "./home/Marketing";
// import { ErrorPage } from "./home/error/ErrorPage";
// import AddCustomer from "./home/customer/AddCustomer";
// import UpdateCustomer from "./home/customer/UpdateCustomer";
// import { Route, Routes } from "react-router-dom";
// import CustomerList from "./home/customer/CustomerList";
// import DeleteCustomer from "./home/customer/DeleteCustomer";

axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.channelName = "Nandini has send Request";
  return request;
});
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
