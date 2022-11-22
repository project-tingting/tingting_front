import React from 'react';
import styled from 'styled-components';

interface BtnPatternProps {
  isRound: boolean;
  disabled: boolean;
}

interface BtnProps extends BtnPatternProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, isRound, disabled, onClick }: BtnProps) {
  return (
    <StyledButton isRound={isRound} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<BtnPatternProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2.4rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  background-color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.disabledColor
      : ({ theme }) => theme.colors.mainColor};
  border-radius: ${(props) => (props.isRound ? '1.8rem' : '0rem')};

  /* color: ${(props) => [props.theme.colors]}; */
`;
