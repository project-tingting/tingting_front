import React from 'react';
import styled from 'styled-components';

interface NoticeProps {
  message: string;
}

export default function Notice({ message }: NoticeProps) {
  return (
    <>
      <NoticeMessage>{message}</NoticeMessage>
    </>
  );
}

const NoticeMessage = styled.p`
  font-size: 2.8rem;
  text-align: center;
  font-weight: 600;
  margin-top: 9.6rem;
`;
