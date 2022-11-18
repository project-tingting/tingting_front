import { atom } from 'recoil';

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    nickName: '',
    birthYear: '',
    school: '',
    sex: '',
  },
});
