import React from 'react';
import styled, { css } from 'styled-components';

type SizeType = 'big' | 'small';

interface IProps {
  size: SizeType;
  text: string;
}

interface IInnerScreen {
  size: string
}

export default function UserInput({ size, text }: IProps) {
  return (
    <InputBox placeholder={text} size={size} />
  )
}

const InputBox = styled.input<IInnerScreen>`
    ${(props) => props.size === 'big' ? (
      css`
        height: 56px;
        border-radius: 20px;
        padding: 12px 0 11px 12px;
        background-color: #EFEFEF;
        color: #A7A7A7;
      `
    ) : (
      css`
        height: 48px;
        border-radius: 10px;
        padding: 10px 0 9px 16px;
        color: #646464;
        background-color: #DEDEDE;
      `
    )}
    width: 396px;
    border: none;
    line-height: 33px;
    font-size: 18px;

    &:focus {
      border: 2px solid #828282;
    }
`;