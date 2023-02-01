import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  text?: string;
  subText?: string;
  isNotice?: boolean;
};

export default function Guide({ text, subText, isNotice }: Props) {
  return (
    <>
      <GuideText isNotice={isNotice}>{text}</GuideText>
      <SubGuide isNotice={isNotice}>{subText}</SubGuide>
    </>
  );
}

const GuideText = styled.h1<Props>`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 5rem 0 4.5rem;
  ${(props) =>
    props.isNotice &&
    css`
      padding-top: 8.6rem;
    `}
`;

const SubGuide = styled.p<Props>`
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: -3.8rem;
  ${(props) =>
    props.isNotice &&
    css`
      text-align: center;
    `}
`;
