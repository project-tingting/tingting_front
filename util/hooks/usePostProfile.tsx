import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';
import { useRecoilValue } from 'recoil';
import { baseAPI } from '../../core/api/baseInstance';
import { userProfileState } from '../../core/recoil/userProfileAtom';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePostProfile = ({ onError, onSuccess }: Props) => {
  const userProfile = useRecoilValue(userProfileState);
  const postUserProfile = async () => {
    const { data } = await baseAPI.post('/userprofile', userProfile, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    });
    return data;
  };

  return useMutation({
    mutationFn: () => postUserProfile(),
    onError,
    onSuccess,
  });
};
