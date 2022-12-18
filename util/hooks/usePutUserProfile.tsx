import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { baseAPI } from '../../core/api/baseInstance';
import { userProfileState } from '../../core/recoil/userProfileAtom';

export const usePutUserProfile = () => {
  const userProfile = useRecoilValue(userProfileState);
  const putUserProfile = async (userprofile: object[]) => {
    try {
      const res = await baseAPI.put('/userprofile', userprofile, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        },
      });
      console.log('data', res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const { data: putUserData, mutate } = useMutation({
    mutationFn: () => {
      return putUserProfile([...userProfile]);
    },
  });
  return { putUserData, mutate };
};
