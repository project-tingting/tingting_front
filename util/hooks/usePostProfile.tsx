import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { baseAPI } from '../../core/api/baseInstance';
import { userProfileState } from '../../core/recoil/userProfileAtom';

export const usePostProfile = () => {
  const userProfile = useRecoilValue(userProfileState);
  const postUserProfile = async (userprofile: object[]) => {
    try {
      const res = await baseAPI.post('/userprofile', userprofile, {
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
      return postUserProfile([...userProfile]);
    },
  });

  return { data, mutate };
};
