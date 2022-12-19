import { useMutation, useQuery } from '@tanstack/react-query';

import { submitLogin, submitLogout, getUserInfo } from '../api/user';

type userInfo = {
  userId: string;
  password: string;
};

// 개발 중
export const useUserLogin = ({ userId, password }: userInfo) => {
  return useMutation(() => submitLogin(userId, password));
};

export const useUserLogout = () => {
  return useMutation((accessToken: string | null) => submitLogout(accessToken));
};

export const useGetUserInfo = () => {
  return useQuery(['get/user'], getUserInfo, {
    refetchOnMount: true,
    onError: (error) => {
      console.error(error);
    },
  });
};
