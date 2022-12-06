import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { chatProps } from '../../types/chat';
import profile from '../../public/assets/icons/profile.svg';

export default function OtherChatBubble({ text }: chatProps) {
  return (
    <OtherChatContainer>
      <OtherProfile>
        {/* 이미지 넣기 */}
        <Image src={profile} />
      </OtherProfile>
      <ChatContainer>{text}</ChatContainer>
    </OtherChatContainer>
  );
}

const OtherChatContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  margin-bottom: 2.2rem;
`;

const ChatContainer = styled.span`
  color: #202222;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: #f2f2f2;
  box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 15px 3px;
  padding: 1.1rem 2rem;
  line-height: 1.8rem;
`;

const OtherProfile = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: rgba(213, 213, 213, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.whiteColor};
`;
