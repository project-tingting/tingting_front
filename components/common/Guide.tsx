import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export default function Guide({ text }: Props) {
  return (
    <>
      <GuideText>{text}</GuideText>
    </>
  );
}

const GuideText = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 5rem 0 4.5rem;
`;