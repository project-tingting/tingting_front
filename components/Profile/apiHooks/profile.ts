import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getUserProfile, postUserProfile, putUserProfile } from '../../../core/api/userProfile';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const useGetUserProfile = () => {
  const { data, refetch } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => {
      return getUserProfile();
    },
  });
  return { data, refetch };
};

export const usePostProfile = ({ onError, onSuccess }: Props) => {
  return useMutation({
    mutationFn: () => postUserProfile(),
    onError,
    onSuccess,
  });
};

export const usePutUserProfile = ({ onError, onSuccess }: Props) => {
  return useMutation({
    mutationFn: () => putUserProfile(),
    onError,
    onSuccess,
  });
};
