import axios from "axios";

export const UserService = {
  getUser: () => {
    return axios.get("http://localhost:8080/viewuser");
  },
  getEmail: () => {
    return axios.get("http://localhost:8080/totaluser");
  },
  getCustomer: () => {
    return axios.get("http://localhost:9090/getcustomer");
  },
};
