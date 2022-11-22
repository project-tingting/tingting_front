import axios from 'axios';
import { RegisterProps } from '../../types/user';

export const registerAPI = async (user: RegisterProps) => {
  try {
    const res = await axios.post('/join/sex', {
      id: user.id,
      password: user.password,
      username: user.nickName,
      birthyear: user.birthYear,
      university: user.university,
      sex: user.sex,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
