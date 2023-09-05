import axios from "axios";

export const http = axios.create({
  baseURL: "http://118.69.83.47:8051",
});
// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    let newConfig = {
      ...config,
    };

    return newConfig;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    return err;
  }
);
