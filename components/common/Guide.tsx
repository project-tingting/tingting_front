import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  subText?: string;
};

export default function Guide({ text, subText }: Props) {
  return (
    <>
      <GuideText>{text}</GuideText>
      <SubGuide>{subText}</SubGuide>
    </>
  );
}

const GuideText = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 5rem 0 4.5rem;
`;

const SubGuide = styled.p`
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: -3.8rem;
`;
