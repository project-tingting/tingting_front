import React, { createContext, useContext, useState } from 'react';
import { InputElementProps } from '../types/input';

export const RadioContext = createContext<{
  alcoholData: InputElementProps | undefined;
  setAlcoholData: React.Dispatch<React.SetStateAction<InputElementProps | undefined>>;
} | null>(null);

interface StatusContextProviderProps {
  children: React.ReactNode;
}

export function AlcoholProvider({ children }: StatusContextProviderProps) {
  const [alcoholData, setAlcoholData] = useState<InputElementProps>(); // 서버 데이터로 변경

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
