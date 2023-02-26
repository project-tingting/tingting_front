import React from 'react';
import styled, { css } from 'styled-components';

interface SmokingButtonProps {
  prefer: string;
  onClick: () => void;
  isActive: boolean;
}

export default function SmokingButton({ prefer, onClick, isActive }: SmokingButtonProps) {
  return (
    <StyledSmokingButton onClick={onClick} isActive={isActive}>
      {prefer}
    </StyledSmokingButton>
  );
}

const StyledSmokingButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  border-radius: 2rem;
  border: none;
  padding: 1.4rem 0;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;
  ${(props) =>
    props.isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.mainColor};
          color: ${({ theme }) => theme.colors.whiteColor};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.inputColor};
          color: #353535;
        `}
`;
