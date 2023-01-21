import { useRecoilValue } from 'recoil';
import { userProfileState } from '../recoil/userProfileAtom';
import { baseAPI } from './baseInstance';

const userProfile = useRecoilValue(userProfileState);

export const getUserProfile = async () => {
  const { data: userProfileData } = await baseAPI.get('/userprofile', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return userProfileData;
};

export const postUserProfile = async () => {
  const { data } = await baseAPI.post('/userprofile', userProfile, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return data;
};

export const putUserProfile = async () => {
  const { data: putUserProfileData } = await baseAPI.put('/userprofile', userProfile, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return putUserProfileData;
};
