import Router from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  setUniversityValidate,
  setUserRegister,
  submitLogin,
  submitLogout,
  getUserInfo,
} from '../api/user';

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
      console.log(data);
      localStorage.setItem('access-token', data.data.data.accessToken);
      Router.push(`/home/${data.data.data.uuid}`);
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

export const useGetUserInfo = () => {
  return useQuery(['get/user'], getUserInfo, {
    refetchOnMount: true,
    onError: (error) => {
      console.error(error);
    },
  });
};
