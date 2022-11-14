import React from 'react';
import styled, { css } from 'styled-components';

type SizeType = 'big' | 'small';
type InputType = 'number' | 'email' | 'password' | 'text';

interface IProps {
  size: SizeType;
  text: string;
  type: InputType;
}

interface IInnerScreen {
  size: string
}

export default function UserInput({ size, text, type }: IProps) {
  return (
    <InputBox placeholder={text} size={size} type={type} min='1990' max='2003' />
  )
}

const InputBox = styled.input<IInnerScreen>`
    ${(props) => props.size === 'big' ? (
      css`
        height: 5.6rem;
        border-radius: 2rem;
        padding: 1.2rem 0 1.1rem 1.2rem;
        background-color: ${({ theme }) => theme.colors.inputColor};
        color: #A7A7A7;
      `
    ) : (
      css`
        height: 4.8rem;
        border-radius: 1rem;
        padding: 1rem 0 0.9rem 1.6rem;
        color: #646464;
        background-color: #DEDEDE;
      `
    )}
    width: 100%;
    border: none;
    line-height: 3.3rem;
    font-size: 1.8rem;

    &:focus {
      border: 0.2rem solid #828282;
    }
`;