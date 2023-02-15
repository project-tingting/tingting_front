import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import invitation from '../../public/assets/icons/invitation.svg';

export default function alert() {
  return (
    <>
      <AlertTitle>알림</AlertTitle>
      <AlertContent>
        <Image src={invitation} alt="초대장" />
        <Message>
          <AlertMessage>user님에게 파티 초대가 왔습니다.</AlertMessage>
          <AlertTime>3시간 전</AlertTime>
        </Message>
        <AcceptButton>수락</AcceptButton>
      </AlertContent>
    </>
  );
}

const AlertTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  padding: 1.1rem 2rem;
`;

const AlertContent = styled.article`
  padding: 1.2rem 1.6rem;
  display: flex;
  border-bottom: 0.4px solid #adb3bc;
`;

const Message = styled.div`
  margin-left: 1.2rem;
`;

const AlertMessage = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
`;

const AlertTime = styled.span`
  font-size: 16px;
  color: #6b6b6b;
`;

const AcceptButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.8rem;
  margin-left: auto;
`;
