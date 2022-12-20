import Image from 'next/image';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import MyChatBubble from '../../components/Chat/MyChatBubble';
import TopNavigation from '../../components/Home/TopNavigation';
import sendchat from '../../public/assets/icons/sendchat.svg';
import notice from '../../public/assets/icons/notice.svg';
import { usePostChat } from '../../util/hooks/usePostChat';
import { useGetChat } from '../../util/hooks/useGetChat';
import { useRouter } from 'next/router';
import { useGetUserInfo } from '../../core/apiHooks/user';
import OtherChatBubble from '../../components/Chat/OtherChatBubble';

export default function chat() {
  const [chatMessage, setChatMessage] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { roomKey } = router.query;

  const { data: userData } = useGetUserInfo();
  console.log('userData', userData?.data);

  const { data: messages, refetch } = useGetChat(roomKey);
  console.log(messages);

  const { mutate } = usePostChat({
    onError: (error) => {
      console.error(error);
    },
    onSuccess: async () => {
      await refetch();
      ref.current?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
      });
    },
  });

  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatMessage(e.target.value);
  };

  const handleSend = (chatMessage: string) => {
    mutate(chatMessage);
    setChatMessage('');
  };

  return (
    <>
      <Container>
        <TopNavigation isChat={true} />
        <ChatContainer>
          <ChatNotice>
            <Image src={notice} />
            <NoticeContents>
              <NoticeText>나가기 전까지 새로운 팀과</NoticeText>
              <NoticeText>매칭을 이용할 수 없습니다</NoticeText>
            </NoticeContents>
          </ChatNotice>
          <Chatting>
            <>
              {messages?.data?.messageList.map((item: any) => {
                console.log(item.uuid);
                return item?.uuid === userData?.data?.data?.user?.uuid ? (
                  <MyChatBubble text={item.message} key={item.id} />
                ) : (
                  <OtherChatBubble text={item.message} key={item.id} />
                );
              })}
            </>
          </Chatting>
        </ChatContainer>
        <SendChat>
          <ChatInput
            type="text"
            placeholder="채팅을 팅팅!"
            onChange={handleChat}
            value={chatMessage}
          />
          <Image src={sendchat} onClick={() => handleSend(chatMessage)} />
        </SendChat>
        <div ref={ref}></div>
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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

const ChatContainer = styled.div`
  padding-top: 4.4rem;
  padding-bottom: 5.4rem;
`;
