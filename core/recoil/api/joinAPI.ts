import axios from 'axios';

export const joinAPI = async (id: string, password: string) => {
  try {
    const res = await axios.post('/join', {
      id: id,
      password: password,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
