import { matchingProps } from './../../types/matching';
import { atom } from 'recoil';

export const matchingInfoState = atom<matchingProps>({
  key: 'matchingInfoState',
  default: {
    partyNum: 8,
  }
})