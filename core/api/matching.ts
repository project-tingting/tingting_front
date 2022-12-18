import { baseAPI } from './baseInstance';

export const matchStart = async (matchingNum: number) => {
  try {
    if (!localStorage.getItem('room-key')) {
      const res = await baseAPI.post('/meetingroom', {
        type: `${matchingNum}:${matchingNum}`
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        }
      })
      localStorage.setItem('room-key', res.data.data.roomKey);
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export const getMatchInfo = async (roomKey: string | null) => {
  try {
    return await baseAPI.get(`/meetingroom/${roomKey}`)
  } catch (error) {
    console.error(error);
  }
}