import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import maleImg from '../../public/assets/images/male.png';
import femaleImg from '../../public/assets/images/female.png';

type Props = {
  gender: string;
  onClick: () => void;
};

type IInnerScreen = {
  gender: string;
};

export default function GenderButton({ gender, onClick }: Props) {
  return (
    <StyledGenderButton gender={gender} onClick={onClick}>
      <Image src={gender === 'male' ? maleImg : femaleImg} />
    </StyledGenderButton>
  );
}

const StyledGenderButton = styled.button<IInnerScreen>`
  width: 11.875rem;
  height: 11.875rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border: none;
  background-color: ${(props) => (props.gender === 'male' ? '#7e97D9' : '#FC7777')};
`;
