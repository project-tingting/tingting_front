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
      <StyledDiv>
        <OtherUserId>팅팅입니다</OtherUserId>
        <ChatContainer>{text}</ChatContainer>
      </StyledDiv>
    </OtherChatContainer>
  );
}

const OtherChatContainer = styled.div`
  display: flex;
  /* align-items: flex-start; */
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

const OtherProfile = styled.div`
  max-width: 5.2rem;
  max-height: 5.2rem;
  border-radius: 50%;
  background-color: rgba(213, 213, 213, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.whiteColor};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const OtherUserId = styled.span`
  color: #4c4956;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 115.19%;
`;

const ChatContainer = styled.span`
  max-width: 60vw;
  word-wrap: break-word;
  color: #202222;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: #f2f2f2;
  box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px 13px 13px 13px;
  padding: 1.1rem 2rem;
  line-height: 1.8rem;
`;
