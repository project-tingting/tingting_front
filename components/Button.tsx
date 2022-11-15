import React from 'react';
import styled from 'styled-components';

interface IBtnPattern {
  isRound: boolean;
  disabled: boolean;
}

interface IBtn extends IBtnPattern {
  text: string;
  onClick: () => void;
}

export default function Button({ text, isRound, disabled, onClick }: IBtn) {
  return (
    <Btn isRound={isRound} disabled={disabled} onClick={onClick}>
      {text}
    </Btn>
  );
}

const Btn = styled.button<IBtnPattern>`
  width: 100%;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2.4rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  background-color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.disabledColor
      : ({ theme }) => theme.colors.enabledColor};
  border-radius: ${(props) => (props.isRound ? '1.8rem' : '0rem')};
`;
