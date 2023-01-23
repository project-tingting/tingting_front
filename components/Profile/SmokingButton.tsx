import React from 'react';
import styled from 'styled-components';

interface SmokingButtonProps {
  prefer: string;
  className: string;
  onClick: () => void;
}

export default function SmokingButton({ prefer, className, onClick }: SmokingButtonProps) {
  return (
    <StyledSmokingButton className={className} onClick={onClick}>
      {prefer}
    </StyledSmokingButton>
  );
}

const StyledSmokingButton = styled.button`
  width: 100%;
  border-radius: 2rem;
  border: none;
  padding: 1.4rem 0;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: #353535;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;

  &.selectedYes,
  &.selectedNo {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
