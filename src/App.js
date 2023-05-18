import "./App.css";
import React, { Suspense, lazy } from "react";
import Admin from "../src/component/Admin";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";
import CustomerDetail from "./home/customer/CustomerDetail";
import CustomerList from "./home/customer/CustomerList";
import { Catalog } from "./home/Catalog";
import { Order } from "./home/Order";
import { Inbox } from "./home/Inbox";
import { Marketing } from "./home/Marketing";
import { DashboardPage } from "./home/dashboard/DashboardPage";
import AddCustomer from "./home/customer/AddCustomer";
import DeleteCustomer from "./home/customer/DeleteCustomer";
import UpdateCustomer from "./home/customer/UpdateCustomer";
import UserList from "./home/customer/UserList";
import Product from "./component/product/Product";
import ProductCard from "./component/product/ProductCard";
import Productdetails from "./component/product/Productdetails";
import ForgetPassword from "./component/ForgetPassword";
import Category from "./component/Category";
import Cart from "./component/product/Cart";
import { Typography } from "@mui/material";
import { ErrorPage } from "./home/error/ErrorPage";
import { Box } from "@mui/material";
import { AuthProvider } from "./component/auth";
import { Route, Routes } from "react-router-dom";
import { RequiredAuth } from "./component/RequiredAuth";

import { RequiredAdminAuth } from "./component/RequiredAdminAuth";

const Home = lazy(() => import("./home/Home"));
const Footer = lazy(() => import("./home/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Please Wait...</div>}>
        <Home />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<ProductCard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Marketing" element={<Marketing />} />
            <Route path="/DashboardPage" element={<DashboardPage />} />
            <Route path="ProductCard" element={<ProductCard />} />

            <Route
              path="/Product"
              element={
                <RequiredAuth>
                  <Product />
                </RequiredAuth>
              }
            />
            <Route
              path="/Category"
              element={
                <RequiredAuth>
                  <Category />
                </RequiredAuth>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <RequiredAuth>
                  <Productdetails />
                </RequiredAuth>
              }
            />
            <Route
              path="Cart"
              element={
                <RequiredAuth>
                  <Cart />
                </RequiredAuth>
              }
            />
            <Route path="Admin" element={<Admin />}></Route>
            <Route
              path="Add"
              element={
                <RequiredAdminAuth>
                  <AddCustomer />
                </RequiredAdminAuth>
              }
            />
            <Route
              path="Delete"
              element={
                <RequiredAdminAuth>
                  <DeleteCustomer />
                </RequiredAdminAuth>
              }
            />
            <Route
              path="Update"
              element={
                <RequiredAdminAuth>
                  <UpdateCustomer />
                </RequiredAdminAuth>
              }
            />
            <Route
              path="UserList"
              element={
                <RequiredAdminAuth>
                  <UserList />
                </RequiredAdminAuth>
              }
            />
            <Route
              path="CustomerList"
              element={
                <RequiredAdminAuth>
                  <CustomerList />
                </RequiredAdminAuth>
              }
            />
            <Route path="CustomerDetail/:id" element={<CustomerDetail />} />
            <Route
              path="Customer/CustomerList"
              element={
                <RequiredAdminAuth>
                  <CustomerList />
                </RequiredAdminAuth>
              }
            />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </Suspense>

      <Suspense fallback={<div>Footer is Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
export default App;
