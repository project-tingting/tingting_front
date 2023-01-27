import { useQuery } from '@tanstack/react-query';
import { getPartyUsers } from '../api/party';

export const useGetPartyUsers = () => {
  return useQuery(['PartyUsers'], getPartyUsers, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};
