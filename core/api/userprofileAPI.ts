import axios from 'axios';
import { UserProfileProps } from '../../types/user';

export const userprofileAPI = async (userprofile: UserProfileProps) => {
  try {
    const res = await axios.post('/userprofile', {
      userprofile,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
