import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = JSON.parse(JSON.stringify(localStorage.getItem('accessToken')));
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data?.accessToken) {
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  }
  return response;
});

export default axiosClient;