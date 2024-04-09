import axios from "axios";
import { BASE_URL } from "../constants";
// import { Navigate } from "react-router-dom";
// Add a request interceptor

const axiosInstance = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? BASE_URL
      : `${window.location.protocol}//${window.location.host}/api/`,
});

/* Add a request interceptor */
const requestInterceptor = (config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};

const errorReqInterceptor = (error) => {
  console.log("Error", error);
};

axiosInstance.interceptors.request.use(requestInterceptor, errorReqInterceptor);
/* Add a request interceptor */

/* Add a response interceptor */
const responseInterceptor = (response) => {
  return response?.data?.data ?? response?.data;
};

const errorResInterceptor = (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.clear();
    window.location.reload();
    console.log("Session Expired");
    // <Navigate to="/login" />;
  } else if (error.response && error.response.status === 504) {
    console.log("Request Failed!");
    return null;
  } else {
    if (
      error?.response?.data?.statusCode === 422 &&
      Object.keys(error?.response?.data?.errors).length > 0
    ) {
      // eslint-disable-next-line
      Object.keys(error?.response?.data?.errors).map((element) => {
        const errorMsg = error?.response?.data?.errors[element];
        console.log(errorMsg);
      });
    } else {
      let message = error?.response?.data?.message ?? error?.message;
      console.log(message);
    }
    return null;
  }
};

axiosInstance.interceptors.response.use(
  responseInterceptor,
  errorResInterceptor
);
/* Add a response interceptor */

export { axiosInstance };
