import { baseAPI } from './baseInstance';

export const userprofileAPI = async (userprofile: object[]) => {
  console.log(userprofile);
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
