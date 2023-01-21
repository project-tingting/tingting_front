import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { putUserProfile } from '../../core/api/userProfile';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePutUserProfile = ({ onError, onSuccess }: Props) => {
  return useMutation({
    mutationFn: () => putUserProfile(),
    onError,
    onSuccess,
  });
};
