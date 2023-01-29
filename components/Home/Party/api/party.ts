import { partyAPI } from '../../../../core/api/baseInstance';
import { PartyUserProps } from '../../../../types/party';

export const getPartyUsers = async () => {
  const { data: partyUsers } = await partyAPI.get('/user/list', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  });
  return partyUsers;
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
