import React from 'react';
import styled, { css } from 'styled-components';

type SizeType = 'large' | 'small';
type InputType = 'number' | 'email' | 'password' | 'text';

type Props = {
  size: SizeType;
  text: string;
  type: InputType;
};

type IInnerScreen = {
  size: string;
};

export default function UserInput({ size, text, type }: Props) {
  return <InputBox placeholder={text} size={size} type={type} min="1990" max="2003" />;
}

export const InputBox = styled.input<IInnerScreen>`
  ${(props) =>
    props.size === 'large'
      ? css`
          height: 5.6rem;
          border-radius: 2rem;
          padding: 1.2rem 0 1.1rem 1.2rem;
          background-color: ${({ theme }) => theme.colors.inputColor};
          color: #a7a7a7;
        `
      : css`
          height: 4.8rem;
          border-radius: 1rem;
          padding: 1rem 0 0.9rem 1.6rem;
          color: #646464;
          background-color: #dedede;
        `}
  width: 100%;
  border: none;
  line-height: 3.3rem;
  font-size: 1.8rem;
`;
