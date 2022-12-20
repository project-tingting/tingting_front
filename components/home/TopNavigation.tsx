import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useUserLogout } from '../../core/apiHooks/user';

import UserProfile from '../../public/assets/icons/UserProfile.svg';
import Symbol from '../../public/assets/icons/symbol.svg';
import Bell from '../../public/assets/icons/bell.svg';
import No_Chat from '../../public/assets/icons/no_chat.svg';
import outChat from '../../public/assets/icons/outChat.svg';
import ChatModal from '../Chat/ChatModal';
import Router, { useRouter } from 'next/router';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';

interface TopNavProps {
  isChat?: boolean;
}

export default function TopNavigation({ isChat }: TopNavProps) {
  const { mutate: handleLogout } = useUserLogout();
  const [modal, setModal] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  const router = useRouter();
  const { data } = useGetRoomKeyInfo();

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
    Router.push(`/chat/${data?.data?.data?.meetingRoomUser?.roomKey}`);
  };
  const handleClickLogo = () => {
    setIsLogoClicked((prev) => !prev);
  };
  return (
    <>
      {modal && <ChatModal handleContinue={handleContinue} />}
      <StyledContainer>
        {isChat ? (
          <Image src={outChat} alt="go back" onClick={onClickBack} />
        ) : (
          <Image src={UserProfile} alt="로고 버튼" onClick={handleClickLogo} />
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
      {isLogoClicked && (
        <LogoutButton onClick={() => handleLogout(localStorage.getItem('access-token'))}>
          로그아웃
        </LogoutButton>
      )}
    </>
  );
}

const StyledContainer = styled.article`
  background: linear-gradient(180deg, #ffffff 50%, rgba(255, 255, 255, 0.5) 100%);
  height: 4.4rem;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Func = styled.section`
  display: flex;
  gap: 1.6rem;
`;

const LogoutButton = styled.button`
  position: absolute;
  left: 1.6rem;
  z-index: 100;
  background-color: #f2f2f2;
  border-radius: 1rem;
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 0.8rem 2rem;
`;
