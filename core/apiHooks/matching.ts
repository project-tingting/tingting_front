import { useMutation, useQuery } from '@tanstack/react-query';
import { matchStart, getMatchInfo, setMatchAccept } from './../api/matching';

type matchInfo = {
    roomKey: string | null;
    acceptNum: number;
}

export const useStartMatch = () => {
  return useMutation((matchingNum: number) => matchStart(matchingNum))
}

export const useGetMatchingInfo = (roomKey: string | null) => {
  return useQuery(['meetingroom'], () => getMatchInfo(roomKey), {
    staleTime: 18000,
    onError: (error) => {
        console.error(error);
    }
  })
}

export const useSetMatchAccept = () => {
  return useMutation(({roomKey, acceptNum}: matchInfo) => setMatchAccept(roomKey, acceptNum));
}