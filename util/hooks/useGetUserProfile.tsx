import { useQuery } from '@tanstack/react-query';
import { baseAPI } from '../../core/api/baseInstance';

export const useGetUserProfile = () => {
  const getUserProfile = async () => {
    try {
      const res = await baseAPI.get('/userprofile', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const { data } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => {
      return getUserProfile();
    },
  });

  return { data };
};
