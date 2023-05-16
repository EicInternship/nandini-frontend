import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import CartState from "./context/CartState";
import { Routes } from "react-router-dom";

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
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
