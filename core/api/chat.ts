import { chatProps } from '../../types/chat';
import { baseAPI } from './baseInstance';

export const getChat = async ({ roomKey }: chatProps) => {
  const { data: chatData } = await baseAPI.get(`/chat/${roomKey}`);
  return chatData;
};

export const postChat = async ({ chatMessage, roomKey }: chatProps) => {
  const { data: postChatData } = await baseAPI.post(
    `/chat/${roomKey}`,
    {
      message: chatMessage,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    },
  );
  return postChatData;
};
