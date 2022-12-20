import { useMutation, useQuery } from '@tanstack/react-query';
import { matchStart, getMatchInfo, setMatchAccept, getRoomKeyInfo } from './../api/matching';

type matchInfo = {
  roomKey: string | null;
  acceptNum: string;
};

export const useStartMatch = () => {
  return useMutation((matchingNum: number) => matchStart(matchingNum), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetMatchingInfo = (roomKey: string | null) => {
  return useQuery(['meetingroom', roomKey], () => getMatchInfo(roomKey), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useSetMatchAccept = () => {
  return useMutation(({ roomKey, acceptNum }: matchInfo) => setMatchAccept(roomKey, acceptNum), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetRoomKeyInfo = () => {
  return useQuery(['meetingroomuser'], getRoomKeyInfo, {
    onError: (error) => {
      console.error(error);
    },
    refetchOnMount: true,
  });
};
