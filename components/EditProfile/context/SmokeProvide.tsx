import React, { createContext, useContext, useState } from 'react';
import { InputElementProps } from '../types/input';
import { smoke } from './providerData';

export const RadioContext = createContext<{
  smokeData: InputElementProps;
  setSmokeData: React.Dispatch<React.SetStateAction<InputElementProps>>;
} | null>(null);

interface StatusContextProviderProps {
  children: React.ReactNode;
}

export function SmokeProvider({ children }: StatusContextProviderProps) {
  const [smokeData, setSmokeData] = useState(smoke[0]); // 서버 데이터로 변경
  return (
    <RadioContext.Provider value={{ smokeData, setSmokeData }}>{children}</RadioContext.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(RadioContext);
  if (context === null) {
    throw new Error(`null이 될 수 없음`);
  }
  return context;
};
