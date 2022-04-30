import axios from 'axios';

let url =
    process.env.NODE_ENV === "production"
        ? "https://crate-digger.herokuapp.com/api/"
        : "/api/"

const AxiosBackend = axios.create({
    baseURL: url,
    timeout: 50000,
    headers: {
        authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`
    }
});

export default AxiosBackend