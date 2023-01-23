import React from 'react';
import styled, { css } from 'styled-components';

type SizeType = 'large' | 'small';
type InputType = 'number' | 'email' | 'password' | 'text';

type Props = {
  sizing: SizeType;
  text: string;
  type: InputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname: string;
};

type IInnerScreen = {
  sizing: string;
};

export default function UserInput({ sizing, text, type, onChange, classname }: Props) {
  return (
    <InputBox
      placeholder={text}
      sizing={sizing}
      type={type}
      min="1990"
      max="2003"
      onChange={onChange}
      className={classname}
    />
  );
}

export const InputBox = styled.input<IInnerScreen>`
  ${(props) =>
    props.sizing === 'large'
      ? css`
          height: 5.6rem;
          border-radius: 2rem;
          padding: 1.2rem 0 1.1rem 1.2rem;
        `
      : css`
          height: 4.8rem;
          border-radius: 1rem;
          padding: 1.2rem 0 1.1rem 1.2rem;
        `}
  width: 100%;
  border: none;
  line-height: 3.3rem;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.inputTextUserColor};
  margin-top: 2.8rem;
  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  }
  &.error {
    border: 0.2rem solid ${({ theme }) => theme.colors.inputErrorColor};
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.inputTextUserColor};
  font-size: 2rem;
  margin-top: 1.2rem;
  & span {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
