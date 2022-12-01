import { atom } from 'recoil';
import { UserProfileProps } from '../../types/user';

export const userProfileState = atom<UserProfileProps>({
  key: 'userProfileState',
  default: {
    topic: '',
    value: '',
  },
});
