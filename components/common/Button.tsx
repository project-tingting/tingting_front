import React from 'react';
import styled from 'styled-components';

interface BtnPatternProps {
  isRound: boolean;
  disabled: boolean;
}

interface BtnProps extends BtnPatternProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, isRound, disabled, onClick }: BtnProps) {
  return (
    <StyledButton isRound={isRound} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<BtnPatternProps>`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2.4rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  margin-bottom: 2.1rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ disabled }) =>
    disabled
      ? ({ theme }) => theme.colors.buttonDisabledColor
      : ({ theme }) => theme.colors.mainColor};
  border-radius: ${({ isRound }) => (isRound ? '1.8rem' : '0rem')};
  bottom: 0;
`;
