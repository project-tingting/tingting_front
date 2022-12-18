import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';
import { baseAPI } from '../../core/api/baseInstance';

export const useGetUserProfile = () => {
  // const [isSaved, setIsSaved] = useState(false);
  const getUserProfile = async () => {
    try {
      const res = await baseAPI.get('/userprofile', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        },
      });
      console.log(res);
      // setIsSaved(true);
      // console.log('isSaved', isSaved);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const { data } = useQuery({
    queryKey: ['userProfile'],
    // enabled: !!isSaved,
    queryFn: () => {
      return getUserProfile();
    },
  });

  return { data };
};
