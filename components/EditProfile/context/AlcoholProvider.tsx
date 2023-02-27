import React, { createContext, useContext, useState } from 'react';
import { useGetCodeList } from '../../Profile/apiHooks/profile';
import { InputElementProps } from '../types/input';
import { AlcoholData, providerData } from './providerData';

export const RadioContext = createContext<{
  alcoholData: InputElementProps;
  setAlcoholData: React.Dispatch<React.SetStateAction<InputElementProps>>;
} | null>(null);

interface StatusContextProviderProps {
  children: React.ReactNode;
}

export function AlcoholProvider({ children }: StatusContextProviderProps) {
  const { data: codeList } = useGetCodeList('isDrink');
  console.log(codeList?.data?.codeList);
  const AlcoholData: InputElementProps[] = [
    {
      label: '네',
      id: '1',
      value: '네',
      name: '음주여부',
      disabled: false,
    },
  ];
  const data = codeList?.data?.codeList?.map((v: any) => {
    const AlcoholData: InputElementProps[] = [
      {
        label: v.codeName,
        id: v.codeOrderNo,
        value: v.code,
        name: v.codeGroup,
        disabled: false,
      },
    ];
  });
  console.log(AlcoholData);
  const [alcoholData, setAlcoholData] = useState(AlcoholData[0]); // 서버 데이터로 변경
  return (
    <RadioContext.Provider value={{ alcoholData, setAlcoholData }}>
      {children}
    </RadioContext.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(RadioContext);
  if (context === null) {
    throw new Error(`null이 될 수 없음`);
  }
  return context;
};
