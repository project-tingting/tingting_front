import React from 'react';
import styled from 'styled-components';
import { ProfileProps } from '../../types/user';
import { useGetUserProfile } from '../Profile/apiHooks/profile';
import { useStateContext } from './context/AlcoholProvider';
import { alcohol } from './context/providerData';
import { InputElementProps } from './types/input';

export default function AlcoholRadioButton({
  label,
  id,
  value,
  name,
  disabled = false,
}: InputElementProps) {
  const { data: userProfile } = useGetUserProfile();

  const isDrinkData = alcohol.filter((data: InputElementProps) => {
    const isDrink = userProfile?.data?.userProfileList.filter((profile: ProfileProps) => {
      if (profile.topic === 'isDrink') return profile;
    });
    if (data.id === isDrink?.[0].valueList?.[0]) return data;
  });
  console.log(isDrinkData[0]);
  const { alcoholData, setAlcoholData } = useStateContext();
  console.log(alcoholData);
  const onClickbutton = () => {
    const newData = alcohol.filter((item: InputElementProps) => item.id === id);
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
        checked={
          alcoholData?.value ? value === alcoholData?.value : value === isDrinkData[0]?.value
        }
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
