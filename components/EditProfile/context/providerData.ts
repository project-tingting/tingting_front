import React from 'react';
import { useGetCodeList } from '../../Profile/apiHooks/profile';
import { InputElementProps } from '../types/input';

// export function providerData() {
//   const { data: codeList } = useGetCodeList('isDrink');
//   console.log(codeList);
//   return codeList;
// }

// const data = codeList?.data?.codeList?.map((v: any) => {
//   [
//     {
//       label: v.codeName,
//       id: v.codeOrderNo,
//       value: v.code,
//       name: v.codeGroup,
//       disabled: false,
//     },
//   ];
// });
// console.log(AlcoholData);

export const alcohol: InputElementProps[] = [
  {
    label: '네',
    id: '1',
    value: '10',
    name: 'isDrink',
    disabled: false,
  },
  {
    label: '아니요',
    id: '2',
    value: '20',
    name: 'isDrink',
    disabled: false,
  },
  {
    label: '상관없어요',
    id: '3',
    value: '30',
    name: 'isDrink',
    disabled: false,
  },
];

export const smoke: InputElementProps[] = [
  {
    label: '네',
    id: '4',
    value: '10',
    name: 'isSmoke',
    disabled: false,
  },
  {
    label: '아니요',
    id: '5',
    value: '20',
    name: 'isSmoke',
    disabled: false,
  },
  {
    label: '상관없어요',
    id: '6',
    value: '30',
    name: 'isSmoke',
    disabled: false,
  },
];
