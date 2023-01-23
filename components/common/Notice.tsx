import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface NoticeProps {
  message: string;
  children?: ReactNode;
}

export default function Notice({ message, children }: NoticeProps) {
  return (
    <NoticeWrap>
      <NoticeMessage>{message}</NoticeMessage>
      {children}
    </NoticeWrap>
  );
}

const NoticeWrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const NoticeMessage = styled.p`
  font-size: 2.8rem;
  text-align: center;
  font-weight: 600;
  margin-top: 9.6rem;
`;
