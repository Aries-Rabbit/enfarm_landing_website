import axios from "axios";

export const https = axios.create({
  baseURL: "https://api.enfarm.com",
});

// Add a request interceptor
https.interceptors.request.use(
  (config) => {
    let newConfig = {
      ...config,
      // Bạn có thể thêm các cài đặt khác tại đây nếu cần
    };

    return newConfig;
  },
  (error) => {
    // Xử lý lỗi yêu cầu nếu cần
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    // Xử lý lỗi phản hồi nếu cần
    return err;
  }
);
