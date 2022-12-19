import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { baseAPI } from '../../core/api/baseInstance';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';

export const useGetChat = () => {
  const router = useRouter();
  const { roomKey } = router.query;
  const getChat = async () => {
    if (!roomKey) return {};
    const res = await baseAPI.get(`/chat/${roomKey}`);
    return res.data;
  };
  const { data, refetch } = useQuery({
    queryKey: ['messageList'],
    queryFn: () => {
      return getChat();
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { data, refetch };
};
