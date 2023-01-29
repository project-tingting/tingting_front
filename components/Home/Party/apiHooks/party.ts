import { useMutation, useQuery } from '@tanstack/react-query';
import { getPartyUsers, postInvitation } from '../api/party';

export const useGetPartyUsers = () => {
  return useQuery(['PartyUsers'], getPartyUsers, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};

export const usePostInvitation = () => {
  return useMutation(postInvitation, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};

export const usePostPartyAccept = () => {
  return useMutation(postInvitation, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
};
