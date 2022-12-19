import { baseAPI } from './baseInstance';

export const matchStart = async (matchingNum: number) => {
  try {
    if (!localStorage.getItem('room-key')) {
      const res = await baseAPI.post(
        '/meetingroom',
        {
          type: `${matchingNum}:${matchingNum}`,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access-token'),
          },
        },
      );
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getMatchInfo = async (roomKey: string | null) => {
  return await baseAPI.get(`/meetingroom/${roomKey}`);
};

export const setMatchAccept = async (roomKey: string | null, acceptNum: string) => {
  return await baseAPI.put(`/meetingroomuser/${roomKey}/${acceptNum}`);
};

export const getRoomKeyInfo = async () => {
  return await baseAPI.get('/meetingroomuser/', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
};
