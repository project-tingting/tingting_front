import axios from 'axios';

export const loginAPI = async (userId: string, password: string) => {
  try {
    const res = await axios.post('/account/login', {
      userId: userId,
      password: password,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
