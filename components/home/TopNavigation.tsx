import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Symbol from '../../public/assets/icons/symbol.svg';
import Bell from '../../public/assets/icons/bell.svg';
import No_Chat from '../../public/assets/icons/no_chat.svg';
import outChat from '../../public/assets/icons/outChat.svg';
import ChatModal from '../Chat/ChatModal';
import Router, { useRouter } from 'next/router';

interface TopNavProps {
  isChat?: boolean;
}

export default function TopNavigation({ isChat }: TopNavProps) {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const onClickBack = () => {
    setModal(true);
  };
  const handleContinue = () => {
    setModal(false);
  };
  const handleGoHome = () => {
    router.back();
  };
  const handleGoChat = () => {
    Router.push('/chat');
  };
  return (
    <>
      {modal && <ChatModal handleContinue={handleContinue} />}
      <StyledContainer>
        {isChat ? (
          <Image src={outChat} alt="go back" onClick={onClickBack} />
        ) : (
          <Image src={Symbol} alt="로고 버튼" />
        )}
        <Func>
          <Image src={Bell} alt="알림 버튼" />
          {isChat ? (
            <Image src={Symbol} alt="로고 버튼" onClick={handleGoHome} />
          ) : (
            <Image src={No_Chat} alt="채팅 알림 버튼" onClick={handleGoChat} />
          )}
        </Func>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.article`
  background: linear-gradient(180deg, #ffffff 50%, rgba(255, 255, 255, 0.5) 100%);
  height: 44px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const Func = styled.section`
  display: flex;
  gap: 16px;
`;
