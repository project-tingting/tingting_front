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
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const { data, mutate } = useMutation({
    mutationFn: () => {
      return putUserProfile([...userProfile]);
    },
  });
  return { data, mutate };
};
