import { userAPI } from './baseInstance';

// 학교 웹메일 인증
export const setUniversityValidate = async (schoolEmail: string) => {
  return await userAPI.get(`/confirmcheck/${schoolEmail}`);
};

// 회원가입
export const setUserRegister = async (userInfo: object) => {
  return await userAPI.post('/signup', {
    ...userInfo,
  });
};

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
