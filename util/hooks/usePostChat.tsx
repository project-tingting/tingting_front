import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { UseMutationOptions } from 'react-query';
import { useRouter } from 'next/router';
import { postChat } from '../../core/api/chat';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const usePostChat = ({ onError, onSuccess }: Props) => {
  // const { data } = useGetRoomKeyInfo();
  // console.log('data', data?.data);
  const router = useRouter();
  const { roomKey } = router.query;
  console.log('roomkey', roomKey);

  return useMutation({
    mutationFn: (chatMessage) => postChat({ chatMessage, roomKey }),
    onError,
    onSuccess,
  });
};
