import axios from "axios";

export const UserService = {
  getUser: () => {
    return axios.get("http://localhost:8080/payment/viewuser");
  },
  getEmail: () => {
    return axios.get("http://localhost:8080/payment/totaluser");
  },
  getCustomer: () => {
    return axios.get("http://localhost:9090/order/getcustomer");
  },
};
