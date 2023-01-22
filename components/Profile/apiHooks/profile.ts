import { useMutation, useQuery } from '@tanstack/react-query';
import Router from 'next/router';
import { getUserProfile, postUserProfile, putUserProfile } from '../../../core/api/userProfile';

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
      setTimeout(() => {
        Router.push('/login');
      }, 2000);
    },
  });
};

export const usePutUserProfile = ({ refetch }: any) => {
  return useMutation(putUserProfile, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
    },
  });
};
