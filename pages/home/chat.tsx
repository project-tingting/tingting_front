import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import MyChatBubble from '../../components/Home/MyChatBubble';
import OtherChatBubble from '../../components/Home/OtherChatBubble';
import TopNavigation from '../../components/Home/TopNavigation';
import sendchat from '../../public/assets/icons/sendChat.svg';

export default function chat() {
  return (
    <Container>
      <TopNavigation isChat={true} />
      <Chatting>
        <OtherChatBubble text={'안녕'} />
        <OtherChatBubble text={'안녕'} />
        <MyChatBubble text={'치킨머금'} />
        <MyChatBubble
          text={'치킨머금안녕sssssssssssssddddddddㅇㅇㅇㅇㅇㅇㅇㄱㄱㄱㄱㄱㄱㄱㄱㄱㄹㄹㄹㄹㄹㄹㄹㄹ'}
        />
        <OtherChatBubble
          text={'안녕sssssssssssssddddddddㅇㅇㅇㅇㅇㅇㅇㄱㄱㄱㄱㄱㄱㄱㄱㄱㄹㄹㄹㄹㄹㄹㄹㄹ'}
        />
      </Chatting>
      <SendChat>
        <ChatInput type="text" placeholder="채팅을 팅팅!" />
        <Image src={sendchat} />
      </SendChat>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

const Chatting = styled.section`
  flex-grow: 1;
  padding: 2.7rem 2rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const SendChat = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: 0.6rem 1.2rem;
  display: flex;
  gap: 1.4rem;
`;

const ChatInput = styled.input`
  padding: 0.9rem 1.6rem 1rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #f2f2f2;
  border: 0.1rem solid #ebeaed;
  border-radius: 20px;
  flex-grow: 1;
  font-size: 1.8rem;
`;
