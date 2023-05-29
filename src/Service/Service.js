import axios from "axios";
// import Cookies from 'js-cookie';

// const jwtToken = response.data.jwtToken;
const token = `Bearer ${localStorage.getItem("jwt")}`;
export const addUser = async (data) => {
  const res = await axios.post("http://localhost:9020/signup", data);

  return res;
};
export const login = (logindetails) => {
  return axios.post("http://localhost:9020/authenticate", logindetails);
};
// export const getproduct=()=>{
//     return axios.get("http://localhost:8080/product")
// }
export const getproduct = () => {
  // const token = `Bearer ${localStorage.getItem('jwt')}`
  return axios.get("http://localhost:9020/product", {
    headers: {
      Authorization: token,
    },
  });
};
// export const productcard=()=>{
//     return axios.get(`http://localhost:8080/${pimagename}`)
// }
export const addproduct = (data) => {
  return axios.post("http://localhost:9020/image/add", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const addcategory = (data) => {
  return axios.post("http://localhost:9020/addcategory", data, {
    headers: {
      Authorization: token,
    },
  });
};
export const getdetailsofProduct = (id) => {
  return axios.get(`http://localhost:9020/productDetails/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};
export const getloginseller = (logindetails) => {
  return axios.post("http://localhost:9020/checkseller", logindetails);
};
export const getcategory = () => {
  // const token = `Bearer ${localStorage.getItem('jwt')}`
  return axios.get("http://localhost:9020/category", {
    headers: {
      Authorization: token,
    },
  });
};
