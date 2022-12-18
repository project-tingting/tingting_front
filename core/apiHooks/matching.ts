import { useMutation, useQuery } from '@tanstack/react-query';
import { matchStart, getMatchInfo } from './../api/matching';

export const useStartMatch = () => {
  return useMutation((matchingNum: number) => matchStart(matchingNum))
}

export const useGetMatchingInfo = (roomKey: string | null) => {
  return useQuery(['meetingroom'], () => getMatchInfo(roomKey), {
    staleTime: 18000,
  })
}