import axios from "axios";

export const UserService = {
  getUser: () => {
    return axios.get("http://localhost:8080/payment/viewuser");
  },
  totalSeller: () => {
    return axios.get("http://localhost:8080/payment/totalseller");
  },
  totalEmail: () => {
    return axios.get("http://localhost:8080/payment/totaluser");
  },
  totalAdmin: () => {
    return axios.get("http://localhost:8080/payment/totaladmin");
  },
  totalCustomer: () => {
    return axios.get("http://localhost:8080/payment/totalcustomer");
  },
  sumofspent: () => {
    return axios.get("http://localhost:8080/payment/sumofspent");
  },
  totalProduct: () => {
    return axios.get("http://localhost:9020/totalproduct");
  },
  getCustomer: () => {
    return axios.get("http://localhost:9090/order/getcustomer");
  },
  getcategory: () => {
    return axios.get("http://localhost:9020/category");
  },
  getdetailsofProduct: (id) => {
    return axios.get(`http://localhost:9020/productDetails/${id}`);
  },
  addcategory: (data) => {
    return axios.post("http://localhost:9020/addcategory", data);
  },
  addproduct: (data) => {
    return axios.post("http://localhost:9020/image/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getproduct: () => {
    return axios.get("http://localhost:9020/product");
  },
  login: (logindetails) => {
    return axios.post(
      "http://localhost:8080/payment/validateuser",
      logindetails
    );
  },
};
