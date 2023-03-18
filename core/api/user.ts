import { userAPI, baseAPI } from './baseInstance';

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

// 로그인
export const submitLogin = async (userId: string, password: string) => {
  return await userAPI.post('/login', {
    userId: userId,
    password: password,
  });
};

// 로그아웃
export const submitLogout = async (accessToken: string | null) => {
  return await userAPI.post('/logout', {
    accessToken: accessToken,
  });
};

// 토큰 재발급
export const getNewToken = async (refreshToken: string | null) => {
  return await baseAPI.post('/regenerateToken', {
    refreshToken: refreshToken,
  });
};

export const getUserInfo = async () => {
  return await userAPI.get('/');
};
