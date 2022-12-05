import axios from 'axios';

export const userAPI = axios.create({
  baseURL: 'http://13.124.248.38:8080/tingting/user',
});
