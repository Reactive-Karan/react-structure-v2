import axios from "axios";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "./constants/baseUrl";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: localStorage.getItem("token") },
});

// Add a request interceptor
axios.interceptors.request.use(
  // All request will go with a header which is configured here

  function (config) {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `${localStorage.getItem("token")}`;
    }

    // Do something before request is sent
    //     return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      <Navigate to="/web-app/login" />;
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
