import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Router from 'next/router';
import {
  getCodeList,
  getUserProfile,
  postUserProfile,
  putUserProfile,
} from '../../../core/api/userProfile';

export const useGetUserProfile = () => {
  return useQuery(['userProfile'], getUserProfile, {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePostProfile = () => {
  return useMutation(postUserProfile, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      Router.push('/profile/completed');
      setTimeout(() => {
        Router.push('/login');
      }, 2000);
    },
  });
};

export const usePutUserProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(putUserProfile, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['userProfile']);
    },
  });
};

export const useGetCodeList = (profileTopic: string) => {
  return useQuery(['codeList'], () => getCodeList(profileTopic), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
