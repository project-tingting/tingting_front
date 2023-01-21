import React, { useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { useUserLogout } from '../../core/apiHooks/user';

import UserProfile from '../../public/assets/icons/UserProfile.svg';
import Symbol from '../../public/assets/icons/symbol.svg';
import Bell from '../../public/assets/icons/bell.svg';
import No_Chat from '../../public/assets/icons/no_chat.svg';
import outChat from '../../public/assets/icons/outChat.svg';
import ChatModal from '../Chat/ChatModal';
import TokenIcon from '../../public/assets/icons/token.svg';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';
import { Wrap } from '../common/Wrap';

interface TopNavProps {
  isChat?: boolean;
  tokenNum: number | null;
}

export default function TopNavigation({ isChat, tokenNum }: TopNavProps) {
  console.log(tokenNum);
  const { mutate: handleLogout } = useUserLogout();
  const [modal, setModal] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const { data } = useGetRoomKeyInfo();

  const onClickBack = () => {
    setModal(true);
  };

  const handleContinue = () => {
    setModal(false);
  };

  const handleGoHome = () => {
    Router.back();
  };

  const handleGoChat = () => {
    Router.push(`/chat/${data?.data?.data?.meetingRoomUser?.roomKey}`);
  };

  const handleClickLogo = () => {
    setIsLogoClicked((prev) => !prev);
  };

  const renderTokenComponent = () => {
    const result = [];
    if (!tokenNum) {
      return null;
    } else {
      for (let i = 0; i < tokenNum; i++) {
        result.push(<Image src={TokenIcon} alt="토큰" />);
      }
      return result;
    }
  };
  return (
    <StyledContainer>
      {modal && <ChatModal handleContinue={handleContinue} />}
      <StyledWrap>
        {isChat ? (
          <Image src={outChat} alt="go back" onClick={onClickBack} />
        ) : (
          <Container>
            <Image src={UserProfile} alt="로고 버튼" onClick={handleClickLogo} />
            <TokenContainer>{renderTokenComponent()}</TokenContainer>
            {isLogoClicked && (
              <LogoutButton onClick={() => handleLogout(localStorage.getItem('access-token'))}>
                로그아웃
              </LogoutButton>
            )}
          </Container>
        )}
        <Func>
          <Image src={Bell} alt="알림 버튼" />
          {isChat ? (
            <Image src={Symbol} alt="로고 버튼" onClick={handleGoHome} />
          ) : (
            <Image src={No_Chat} alt="채팅 알림 버튼" onClick={handleGoChat} />
          )}
        </Func>
      </StyledWrap>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  background: linear-gradient(180deg, #ffffff 50%, rgba(255, 255, 255, 0.5) 100%);
  height: 4.4rem;
  padding: 0 1.6rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const StyledWrap = styled(Wrap)`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.section`
  display: flex;
  gap: 1.7rem;
`;

const Func = styled.section`
  display: flex;
  gap: 1.6rem;
`;

const LogoutButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 4.6rem;
  background-color: #f2f2f2;
  border-radius: 1rem;
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 0.8rem 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;

const TokenContainer = styled.section`
  display: flex;
  gap: 0.4rem;
`;
