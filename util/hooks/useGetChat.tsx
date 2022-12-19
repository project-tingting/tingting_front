import { useQuery } from '@tanstack/react-query';
import { baseAPI } from '../../core/api/baseInstance';

export const useGetChat = (roomKey: string | string[] | undefined) => {
  const getChat = async () => {
    const res = await baseAPI.get(`/chat/${roomKey}`);
    return res.data;
  };
  const { data, refetch } = useQuery({
    queryKey: [`messageList/${roomKey}`],
    queryFn: () => {
      return getChat();
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { data, refetch };
};
