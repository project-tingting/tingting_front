import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'http://52.79.235.50:8080/tingting',
});

export const userAPI = axios.create({
  baseURL: 'http://13.124.248.38:8080//tingting/user',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
});
