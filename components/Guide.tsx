import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export default function Guide({ text }: Props) {
  return <GuideText>{text}</GuideText>;
}

const GuideText = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
  line-height: 2.0625rem;
  padding: 48px 0;
`;
