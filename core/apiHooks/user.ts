import Router from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { submitLogin, submitLogout, getUserInfo } from '../api/user';

type userInfo = {
  userId: string;
  password: string;
};

// 개발 중
export const useUserLogin = ({ userId, password }: userInfo) => {
  return useMutation(() => submitLogin(userId, password), {
    onSuccess: (data) => {
      localStorage.setItem('access-token', data.data.accessToken);
      Router.push(`/home/${data.data.uuid}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

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
