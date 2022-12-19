import { atom } from 'recoil';

export interface ProfileType {
  topic?: string;
  valueList?: string[] | undefined;
}

export const userProfileState = atom<ProfileType[]>({
  key: 'userProfileState',
  default: [],
});
