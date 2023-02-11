import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  isCenter?: boolean;
};

type TextProps = {
  isCenter?: boolean;
};

export default function Guide({ text, isCenter }: Props) {
  return (
    <>
      <GuideText isCenter={isCenter}>{text}</GuideText>
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
