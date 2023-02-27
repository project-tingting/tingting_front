import React from 'react';
import { useGetCodeList } from '../../Profile/apiHooks/profile';
import { InputElementProps } from '../types/input';

export function providerData() {
  const { data: codeList } = useGetCodeList('isDrink');
  console.log(codeList);
  return codeList;
}

export const AlcoholData: InputElementProps[] = [
  {
    label: '네',
    id: '1',
    value: '네',
    name: '음주여부',
    disabled: false,
  },
  { label: '아니요', id: '2', value: '아니요', name: '음주여부', disabled: false },
  { label: '상관없어요', id: '3', value: '상관없어요', name: '음주여부', disabled: false },
];
