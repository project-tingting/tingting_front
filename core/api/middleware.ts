import axios, { AxiosRequestConfig } from 'axios';
import { userAPI, baseAPI } from './baseInstance';

// api 요청 전 토큰 헤더에 세팅
baseAPI.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('accessToken');

    if (token && config.headers) {
      axios.defaults.headers['Authorization'] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 토큰이 만료되었을 경우 refresh
baseAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// baseAPI.interceptors.response.use(
//   (response) => {
//     const { accessToken } = response.data;
//     userAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//     baseAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

userAPI.interceptors.response.use(
  (response) => {
    const { accessToken } = response.data;
    userAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    baseAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    console.log(accessToken);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
