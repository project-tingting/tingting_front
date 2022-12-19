import Router from 'next/router';
import axios from 'axios';
import { userAPI } from './baseInstance';

const loginNGoMain = (accessToken: string, uuid: string) => {
  localStorage.setItem('access-token', accessToken);
  Router.push(`/home/${uuid}`);
};

const logoutNGoToMain = () => {
  Router.push('/');
};

// 로그인은 개발 중
export const submitLogin = async (userId: string, password: string) => {
  try {
    const res = await userAPI.post('/login', {
      userId: userId,
      password: password,
    });
    loginNGoMain(res.data.data.accessToken, res.data.data.uuid);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};

export const submitLogout = async (accessToken: string | null) => {
  try {
    localStorage.clear();
    const res = await userAPI.post('/logout', {
      accessToken: accessToken,
    });
    logoutNGoToMain();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfo = async () => {
  return await userAPI.get('/', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
};
