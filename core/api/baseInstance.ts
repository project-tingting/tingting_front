import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'http://15.164.224.151:8080/tingting',
});

export const userAPI = axios.create({
  baseURL: 'http://15.164.224.151:8080/tingting/user',
});
