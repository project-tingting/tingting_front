import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

import { getChat, postChat } from '../../../core/api/chat';
import { chatProps } from '../../../types/chat';
import { UseMutationOptions } from 'react-query';

type Props = UseMutationOptions<AxiosResponse<any>, Error, any>;

export const useGetChat = ({ roomKey }: chatProps) => {
  const { data, refetch } = useQuery({
    refetchInterval: 1000,
    queryKey: [`messageList/${roomKey}`],
    queryFn: () => {
      return getChat({ roomKey });
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { data, refetch };
};

export const usePostChat = ({ onSuccess }: Props) => {
  const router = useRouter();
  const { roomKey } = router.query;
  console.log('roomkey', roomKey);

  return useMutation({
    mutationFn: (chatMessage) => postChat({ chatMessage, roomKey }),
    onError: (error) => {
      console.error(error);
    },
    onSuccess,
  });
};
