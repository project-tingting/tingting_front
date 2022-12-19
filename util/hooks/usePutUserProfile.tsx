import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import { baseAPI } from '../../core/api/baseInstance';
import { userProfileState } from '../../core/recoil/userProfileAtom';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePutUserProfile = ({ onError, onSuccess }: Props) => {
  const userProfile = useRecoilValue(userProfileState);
  const putUserProfile = async () => {
    const { data } = await baseAPI.put('/userprofile', userProfile, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    });
    return data;
  };

  return useMutation({
    mutationFn: () => putUserProfile(),
    onError,
    onSuccess,
  });
};
