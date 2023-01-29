import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const baseAPI = axios.create({
  baseURL: BASE_URL,
});

export const userAPI = axios.create({
  baseURL: `${BASE_URL}/user`,
});

export const partyAPI = axios.create({
  baseURL: `${BASE_URL}/party`,
});
