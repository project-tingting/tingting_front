import Image from 'next/image';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import MyChatBubble from '../../components/Chat/MyChatBubble';
import TopNavigation from '../../components/Home/TopNavigation';
import sendchat from '../../public/assets/icons/sendchat.svg';
import notice from '../../public/assets/icons/notice.svg';
import { useRouter } from 'next/router';
import { useGetUserInfo } from '../../core/apiHooks/user';
import OtherChatBubble from '../../components/Chat/OtherChatBubble';
import { useGetChat, usePostChat } from '../../components/Chat/apiHooks/chat';
import { ChatListProps, chatProps } from '../../types/chat';
import { FixedBottomSection } from '../../components/Layout/FixedLayout';

export default function chat() {
  const [chatMessage, setChatMessage] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  console.log(ref);
  const router = useRouter();
  const { roomKey } = router.query;

  const { data: userData } = useGetUserInfo();
  console.log('userData', userData?.data);

  const { data: messages, refetch } = useGetChat({ roomKey });
  console.log(messages);

  const { mutate: postChatMutate } = usePostChat({
    onSuccess: async () => {
      await refetch();
      ref.current?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
      });
    },
  });

  // useEffect(() => {
  //   // ref.current!.scrollTop = ref.current!.scrollHeight;
  //   ref.current && (ref.current.scrollTop = ref.current.scrollHeight);
  // }, [chatMessage]);

  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatMessage(e.target.value);
  };

  const handleSendKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.code === 'Enter' && chatMessage !== '') {
      handleSend({ chatMessage });
    }
  };

  const handleSend = ({ chatMessage }: chatProps) => {
    postChatMutate(chatMessage);
    setChatMessage('');
  };

  return (
    <Container>
      <TopNavigation isChat={true} tokenNum={null} />
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
            {messages?.data?.messageList.map((item: ChatListProps) => {
              console.log(item.uuid);
              return item?.uuid === userData?.data?.data?.user?.uuid ? (
                <MyChatBubble chatMessage={item.message} key={item.id} />
              ) : (
                <OtherChatBubble userId={item.userId} chatMessage={item.message} key={item.id} />
              );
            })}
          </>
        </Chatting>
        <div ref={ref}></div>
      </ChatContainer>
      <StyledFixed>
        <ChatInput
          type="text"
          placeholder="채팅을 팅팅!"
          onChange={handleChat}
          value={chatMessage}
          onKeyDown={handleSendKeyDown}
        />
        <Image src={sendchat} onClick={() => handleSend({ chatMessage })} />
      </StyledFixed>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const ChatContainer = styled.div`
  margin-top: 4.4rem;
  margin-bottom: 8.45rem;
  height: 100%;
  overflow: scroll;
`;

const Chatting = styled.section`
  padding: 2.7rem 2rem 0;
  background-color: ${({ theme }) => theme.colors.bgColor};
  height: calc(100% - 8.45rem);
`;

const StyledFixed = styled(FixedBottomSection)`
  gap: 1.4rem;
  & img {
    cursor: pointer;
  }
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
