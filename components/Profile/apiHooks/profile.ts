import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { getUserProfile, postUserProfile, putUserProfile } from '../../../core/api/userProfile';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: () => {
      return getUserProfile();
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

// export const useGetUserProfile = () => {
//     const { data, refetch } = useQuery({
//       queryKey: ['userProfile'],
//       queryFn: () => {
//         return getUserProfile();
//       },
//       onError: (error) => {
//           console.error(error);
//         },
//     });
//     return { data, refetch };
//   };

export const usePostProfile = () => {
  return useMutation({
    mutationFn: () => postUserProfile(),
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

export const usePutUserProfile = ({ onSuccess }: Props) => {
  return useMutation({
    mutationFn: () => putUserProfile(),
    onError: (error) => {
      console.error(error);
    },
    onSuccess,
  });
};
