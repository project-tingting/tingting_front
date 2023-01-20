import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';
import { baseAPI } from '../../core/api/baseInstance';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';
import { useRouter } from 'next/router';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePostChat = ({ onError, onSuccess }: Props) => {
  const { data } = useGetRoomKeyInfo();
  console.log('data', data?.data);
  const router = useRouter();
  const { roomKey } = router.query;
  console.log('roomkey', roomKey);
  const postChat = async (chatMessage: string) => {
    const { data } = await baseAPI.post(
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
    return data;
  };
  return useMutation({
    mutationFn: (chatMessage) => postChat(chatMessage),
    onError,
    onSuccess,
  });
};
