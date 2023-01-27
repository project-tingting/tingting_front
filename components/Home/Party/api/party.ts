import { baseAPI } from '../../../../core/api/baseInstance';

export const getPartyUsers = async () => {
  const { data: users } = await baseAPI.get('/party/user/list', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
  return users;
};
