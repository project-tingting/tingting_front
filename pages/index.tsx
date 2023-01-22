import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import TingTingLogo from '../public/assets/icons/tingting_logo.svg';

import LoginButton from '../components/Login/LoginButton';

export default function index() {
  const handleClickLoginButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Router.push('/login');
  };

  const handleClickJoinButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Router.push('/join/userinfo');
  };

  return (
    <StyledContainer>
      <Image src={TingTingLogo} alt="팅팅 로고" priority />
      <ButtonContainer>
        <LoginButton
          text="로그인"
          isRound={true}
          disabled={false}
          onClick={handleClickLoginButton}
        />
        <LoginButton
          text="회원가입"
          isRound={true}
          disabled={false}
          onClick={handleClickJoinButton}
        />
      </ButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: 14.3125rem 1rem 2.125rem;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto 2rem 0;
  button:last-child {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.inputTextUserColor};
  }
`;
