import axios from 'axios';
import { RegisterProps } from '../../types/user';

export const registerAPI = async (user: RegisterProps) => {
  try {
    const res = await axios.post('/account/reigster', {
      userId: user.userId,
      password: user.password,
      birthyear: user.birthDay,
      gender: user.gender,
      university: user.university,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
