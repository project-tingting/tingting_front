import { useRecoilValue } from 'recoil';
import { userProfileState } from '../recoil/userProfileAtom';
import { baseAPI } from './baseInstance';

export const getUserProfile = async () => {
  const { data: userProfileData } = await baseAPI.get('/userprofile', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return userProfileData;
};

export const putUserProfile = async () => {
  const userProfile = useRecoilValue(userProfileState);
  const { data: putUserProfileData } = await baseAPI.put('/userprofile', userProfile, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return putUserProfileData;
};
