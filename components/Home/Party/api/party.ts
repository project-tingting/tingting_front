import { partyAPI } from '../../../../core/api/baseInstance';
import { PartyUserProps } from '../../../../types/party';

export const getUsers = async () => {
  const { data: toInviteUsers } = await partyAPI.get('/user/list', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  });
  return toInviteUsers;
};

export const postInvitation = async ({ userId }: PartyUserProps) => {
  const { data: invitationData } = await partyAPI.post(
    '/invitation',
    {
      guest: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
    },
  );
  return invitationData;
};

export const postPartyAccept = async () => {
  const { data: partyAcceptData } = await partyAPI.post('/accept', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  });
  return partyAcceptData;
};

export const getPartyUsers = async () => {
  const { data: partyUsers } = await partyAPI.get('/host/list', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  });
  return partyUsers;
};
