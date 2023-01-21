import { useQuery } from '@tanstack/react-query';
import { getChat } from '../../core/api/chat';
import { chatProps } from '../../types/chat';

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
