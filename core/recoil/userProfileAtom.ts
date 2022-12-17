import { atom } from 'recoil';

export interface ProfileType {
  topic: string;
  valueList: string[];
}

export const userProfileState = atom<ProfileType[]>({
  key: 'userProfileState',
  default: [
    {
      topic: 'mbti',
      valueList: ['aaaa'],
    },
    {
      topic: 'interestKeyword',
      valueList: ['game', 'sport', 'design'],
    },
    {
      topic: 'isDrink',
      valueList: ['1'],
    },
  ],
});
