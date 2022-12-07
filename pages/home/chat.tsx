import React from 'react';
import styled from 'styled-components';
import MyChatBubble from '../../components/Home/MyChatBubble';
import OtherChatBubble from '../../components/Home/OtherChatBubble';
import TopNavigation from '../../components/Home/TopNavigation';

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
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

const Chatting = styled.section`
  margin: 2.7rem 2rem;
`;
