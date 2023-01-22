import React from 'react';
import styled from 'styled-components';

type Props = {
  gender: string;
  onClick: () => void;
  className: string;
};

type IInnerScreen = {
  gender: string;
};

export default function GenderButton({ gender, onClick, className }: Props) {
  return (
    <StyledGenderButton gender={gender} onClick={onClick} className={className}>
      {gender === 'male' ? '남성' : '여성'}
    </StyledGenderButton>
  );
}

const StyledGenderButton = styled.button<IInnerScreen>`
  width: 100%;
  border-radius: 2rem;
  border: none;
  padding: 1.4rem 0;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: #353535;

  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;

  &.maleClicked,
  &.femaleClicked {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
