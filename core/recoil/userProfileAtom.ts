import { atom, selector } from 'recoil';

export const userProfileState = atom<object[]>({
  key: 'userProfileState',
  default: [],
});

// export const filterMbtiState = selector({
//   key: 'mbtiState',
//   get:({get}) => get(userProfileState).filter(obj => obj.topic),
// })
