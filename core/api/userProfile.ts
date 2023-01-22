import { useRecoilValue } from 'recoil';
import { ProfileType, userProfileState } from '../recoil/userProfileAtom';
import { baseAPI } from './baseInstance';

export const getUserProfile = async () => {
  const { data: userProfileData } = await baseAPI.get('/userprofile', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return userProfileData;
};

export const postUserProfile = async (userProfile: ProfileType[]) => {
  const { data } = await baseAPI.post('/userprofile', userProfile, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return data;
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
