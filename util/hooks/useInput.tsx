import React, { useCallback, useState } from 'react';

type UserInputProps = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export default function useInput(initialValue: string): UserInputProps {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}
