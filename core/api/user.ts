import { userAPI } from './baseInstance';

// 로그인은 개발 중
export const submitLogin = async (userId: string, password: string) => {
  return await userAPI.post('/login', {
    userId: userId,
    password: password,
  });
};

export const submitLogout = async (accessToken: string | null) => {
  return await userAPI.post('/logout', {
    accessToken: accessToken,
  });
};

export const getUserInfo = async () => {
  return await userAPI.get('/', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access-token'),
    },
  });
};
