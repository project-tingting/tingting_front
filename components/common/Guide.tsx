import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  text: string;
  isCenter?: boolean;
  subText?: string;
};

type TextProps = {
  isCenter?: boolean;
};

export default function Guide({ text, isCenter, subText }: Props) {
  return (
    <>
      <GuideText isCenter={isCenter}>{text}</GuideText>
      {subText && <SubGuide>{subText}</SubGuide>}
    </>
  );
}

const GuideText = styled.h1<TextProps>`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 5rem 0 4.5rem;

  text-align: ${({ isCenter }) => isCenter && 'center'};
`;

const SubGuide = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: -3.8rem;
  ${({ isCenter }) =>
    isCenter &&
    css`
      text-align: center;
    `}
`;
