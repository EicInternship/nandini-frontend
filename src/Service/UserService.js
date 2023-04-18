import axios from "axios";

export const UserService = () => {
    return axios.get('http://localhost:8080/viewuser');
}
