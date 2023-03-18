import { baseAPI } from './baseInstance';

export const matchStart = async (matchingNum: number) => {
  return await baseAPI.post('/meetingroom', {
    type: `${matchingNum}:${matchingNum}`,
  });
};

export const getMatchInfo = async (roomKey: string | null) => {
  return await baseAPI.get(`/meetingroom/${roomKey}`);
};

export const setMatchAccept = async (roomKey: string | null, acceptNum: string) => {
  return await baseAPI.put(`/meetingroomuser/${roomKey}/${acceptNum}`);
};

export const getRoomKeyInfo = async () => {
  return await baseAPI.get('/meetingroomuser/');
};
