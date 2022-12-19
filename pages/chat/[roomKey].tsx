import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyChatBubble from '../../components/Chat/MyChatBubble';
import OtherChatBubble from '../../components/Chat/OtherChatBubble';
import TopNavigation from '../../components/Home/TopNavigation';
import sendchat from '../../public/assets/icons/sendChat.svg';
import notice from '../../public/assets/icons/notice.svg';
import { usePostChat } from '../../util/hooks/usePostChat';
import { useGetChat } from '../../util/hooks/useGetChat';

export default function chat() {
  const [chatMessage, setChatMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(['']);
  const [sendClicked, setSendClicked] = useState(false);
  const { data: messages, refetch } = useGetChat();

  const { mutate } = usePostChat({
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('success');

      refetch();
    },
  });

  useEffect(() => {
    console.log('messages');
    console.log(messages?.data?.messageList);
  }, [messages]);
  // useEffect(() => {}, [chatMessage]);

  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatMessage(e.target.value);
  };

  const handleSend = (chatMessage: string) => {
    mutate(chatMessage);
    console.log(sendClicked);
    setChatMessage('');
  };

  return (
    <>
      <Container>
        <TopNavigation isChat={true} />
        <ChatNotice>
          <Image src={notice} />
          <NoticeContents>
            <NoticeText>나가기 전까지 새로운 팀과</NoticeText>
            <NoticeText>매칭을 이용할 수 없습니다</NoticeText>
          </NoticeContents>
        </ChatNotice>
        <Chatting>
          {messages &&
            messages?.data?.messageList.map((item: any) => {
              <MyChatBubble text={'23'} key={item.id} />;
            })}
        </Chatting>
        <SendChat>
          <ChatInput
            type="text"
            placeholder="채팅을 팅팅!"
            onChange={handleChat}
            value={chatMessage}
          />
          <Image src={sendchat} onClick={() => handleSend(chatMessage)} />
        </SendChat>
      </Container>
    </>
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

const ChatNotice = styled.div`
  background-color: #ebe8ef;
  padding: 2rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const NoticeContents = styled.div`
  display: flex;
  flex-direction: column;
`;
const NoticeText = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: #353535;
`;
