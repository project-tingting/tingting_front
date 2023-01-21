import React from 'react';
import styled from 'styled-components';
import { chatProps } from '../../types/chat';

export default function MyChatBubble({ chatMessage }: chatProps) {
  return (
    <MyChatContainer>
      <ChatContainer>{chatMessage}</ChatContainer>
    </MyChatContainer>
  );
}

const MyChatContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 0.8rem;
`;

const ChatContainer = styled.span`
  max-width: 60vw;
  word-wrap: break-word;
  color: #202222;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: #9b7aff;
  box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 13px 3px 13px 13px;
  padding: 1.1rem 2rem;
  line-height: 1.8rem;
`;
