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

// baseAPI.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     // const { data } = await baseAPI.post('/regenerateToken', {

//     // })s
//     return Promise.reject(error);
//   },
// );

// userAPI.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     // const { data } = await baseAPI.post('/regenerateToken', {

//     // })
//     return Promise.reject(error);
//   },
// );
