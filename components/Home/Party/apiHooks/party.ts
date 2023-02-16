import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPartyUsers, getUsers, postInvitation } from '../api/party';

export const useGetUsers = () => {
  return useQuery(['InvitationUsers'], getUsers, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};

export const usePostInvitation = () => {
  const queryClient = useQueryClient();
  return useMutation(postInvitation, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['InvitationUsers']);
    },
    onError: (error) => console.error(error),
  });
};

export const usePostPartyAccept = () => {
  const queryClient = useQueryClient();
  return useMutation(postInvitation, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['InvitationUsers']);
    },
    onError: (error) => console.error(error),
  });
};

export const useGetPartyUsers = () => {
  return useQuery(['PartyUsers'], getPartyUsers, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => console.error(error),
  });
};
