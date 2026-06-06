// https://dummyjson.com/
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(config => {
  // grab your token however you store it (SecureStore, MMKV, etc.)
  //   const token = await getToken();
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  console.log('Request:', config.baseURL! + config.url);
  return config;
});

console.log('axiosClientaxiosClient', axiosClient);

// Response interceptor — handle 401s globally
axiosClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      // handle logout or token refresh here
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
