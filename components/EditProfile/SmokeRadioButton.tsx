import React from 'react';
import styled from 'styled-components';
import { useStateContext } from './context/SmokeProvide';
import { InputElementProps } from './types/input';
import { smoke } from './context/providerData';

export default function SmokeRadioButton({
  label,
  id,
  value,
  name,
  disabled = false,
}: InputElementProps) {
  const { smokeData, setSmokeData } = useStateContext();
  const onClickbutton = () => {
    const newData = smoke.filter((item: InputElementProps) => item.id === id);
    setSmokeData(newData[0]);
  };

  return (
    <RadioButtonContainer>
      <RadioInput
        type="radio"
        id={id}
        value={value}
        name={name}
        disabled={disabled}
        checked={value === smokeData?.value}
        onClick={onClickbutton}
      />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioButtonContainer>
  );
}

const RadioButtonContainer = styled.div`
  flex: 1 1 30%;
`;

const RadioInput = styled.input`
  display: none;
  :checked + label {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

const RadioLabel = styled.label`
  border-radius: 2rem;
  font-size: 2rem;
  padding: 1.6rem 2.15rem;
  border: 1px solid #adb3bc;
  display: block;
  text-align: center;
`;
