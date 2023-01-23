import React from 'react';
import styled from 'styled-components';

interface AlcoholButtonProps {
  drinking: string;
  className: string;
  onClick: () => void;
}

export default function AlcoholButton({ drinking, className, onClick }: AlcoholButtonProps) {
  return (
    <StyledAlcoholButton className={className} onClick={onClick}>
      {drinking}
    </StyledAlcoholButton>
  );
}

const StyledAlcoholButton = styled.button`
  width: 100%;
  border-radius: 2rem;
  border: none;
  padding: 1.4rem 0;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: #353535;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;

  &.selectedNever,
  &.selectedSometimes,
  &.selectedOften {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
