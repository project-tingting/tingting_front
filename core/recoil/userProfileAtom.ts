import { atom } from 'recoil';

export const userProfileState = atom<object[]>({
  key: 'userProfileState',
  default: [],
});
