import axios from 'axios';
import Router from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  setUniversityValidate,
  setUserRegister,
  submitLogin,
  submitLogout,
  getUserInfo,
  getNewToken,
} from '../api/user';
import { baseAPI, userAPI } from '../api/baseInstance';

type userInfo = {
  userId: string;
  password: string;
};

// 학교 웹메일 인증
export const useSetUniversityValidate = (schoolEmail: string) => {
  return useQuery(['get/confirmcheck'], () => setUniversityValidate(schoolEmail), {
    onError: (error) => {
      console.error(error);
    },
  });
};

// 회원가입
export const useSetUserRegister = (userInfo: object) => {
  return useMutation(() => setUserRegister(userInfo), {
    onError: (error) => {
      console.error(error);
    },
  });
};

// 로그인
export const useUserLogin = ({ userId, password }: userInfo) => {
  return useMutation(() => submitLogin(userId, password), {
    onMutate: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    },
    onSuccess: (data) => {
      const { accessToken } = data.data.data;

      if (data.data.code === 200) {
        userAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        baseAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem('refreshToken', data.data.data.refreshToken);
      }

      Router.push('/home');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

// 로그아웃
export const useUserLogout = () => {
  return useMutation((accessToken: string | null) => submitLogout(accessToken), {
    onSuccess: () => {
      localStorage.clear();
      Router.push('/');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

// 토큰 재발급
export const useGetNewToken = (refreshToken: string | null) => {
  return useMutation(() => getNewToken(refreshToken), {
    onSuccess: (data) => {
      const { accessToken } = data.data;
      console.log(accessToken);
      userAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      baseAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      // localStorage.setItem('refreshToken', data.data.refreshToken);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetUserInfo = () => {
  return useQuery(['get/user'], getUserInfo, {
    refetchOnMount: true,
    onError: (error) => {
      console.error(error);
    },
  });
};
