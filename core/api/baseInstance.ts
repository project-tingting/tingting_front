import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'http://52.79.235.50:8080/tingting',
});

export const userAPI = axios.create({
  baseURL: 'http://43.200.181.226:8080/tingting/user',
});
