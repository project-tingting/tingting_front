import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPartyUsers, postInvitation } from '../api/party';

export const useGetPartyUsers = () => {
  return useQuery(['PartyUsers'], getPartyUsers, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};

export const usePostInvitation = () => {
  const queryClient = useQueryClient();
  return useMutation(postInvitation, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['PartyUsers']);
    },
    onError: (error) => console.error(error),
  });
};

export const usePostPartyAccept = () => {
  const queryClient = useQueryClient();
  return useMutation(postInvitation, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['PartyUsers']);
    },
    onError: (error) => console.error(error),
  });
};
