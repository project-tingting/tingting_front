import React from 'react';
import styled from 'styled-components';
import { data, useStateContext } from './context/AlcoholProvider';
import { InputElementProps } from './types/input';

export default function AlcoholRadioButton({
  label,
  id,
  value,
  name,
  disabled = false,
}: InputElementProps) {
  const { alcoholData, setAlcoholData } = useStateContext();
  console.log(alcoholData.value);
  const onClickbutton = () => {
    const newData = data.filter((item: InputElementProps) => item.id === id);
    setAlcoholData(newData[0]);
  };

  return (
    <RadioButtonContainer>
      <RadioInput
        type="radio"
        id={id}
        value={value}
        name={name}
        disabled={disabled}
        checked={value === alcoholData?.value}
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
