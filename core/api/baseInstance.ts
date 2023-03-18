import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// axios.defaults.withCredentials = true;

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const userAPI = axios.create({
  baseURL: `${BASE_URL}/user`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

baseAPI.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);
