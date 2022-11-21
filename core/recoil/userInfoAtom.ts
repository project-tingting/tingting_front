import { atom } from 'recoil';
import { RegisterProps } from '../../types/user';

export const userInfoState = atom<RegisterProps>({
  key: 'userInfoState',
  default: {
    nickName: '',
    birthYear: '',
    university: '',
    sex: '',
  },
});
