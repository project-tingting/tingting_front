import axios from 'axios';

export const userAPI = axios.create({
  baseURL: 'http://52.79.235.50:8080/tingting/user',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
});
