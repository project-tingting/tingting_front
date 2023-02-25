import React, { createContext, useContext, useState } from 'react';
import { InputElementProps } from '../types/input';

export const RadioContext = createContext<{
  alcoholData: InputElementProps;
  setAlcoholData: React.Dispatch<React.SetStateAction<InputElementProps>>;
} | null>(null);

export const data: InputElementProps[] = [
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

interface StatusContextProviderProps {
  children: React.ReactNode;
}

export function AlcoholProvider({ children }: StatusContextProviderProps) {
  const [alcoholData, setAlcoholData] = useState(data[0]);

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
