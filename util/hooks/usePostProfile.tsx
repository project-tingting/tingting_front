import { useMutation } from '@tanstack/react-query';
import { AxiosPromise, AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';
import { useRecoilValue } from 'recoil';
import { baseAPI } from '../../core/api/baseInstance';
import { ProfileType, userProfileState } from '../../core/recoil/userProfileAtom';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePostProfile = ({ onError, onSuccess }: Props) => {
  const userProfile = useRecoilValue(userProfileState);
  const postUserProfile = async (userprofile: ProfileType[]) => {
    const { data } = await baseAPI.post('/userprofile', userprofile, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    });
    return data;
  };

  return useMutation({
    mutationFn: () => postUserProfile(userProfile),
    onError,
    onSuccess,
  });
};
