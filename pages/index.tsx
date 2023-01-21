import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import TingTingLogo from '../public/assets/icons/tingting_logo.svg';

import Button from '../components/Button';
import { Wrap } from '../components/common/Wrap';

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
    <Wrap>
      <StyledContainer>
        <Image src={TingTingLogo} alt="팅팅 로고" />
        <ButtonContainer>
          <Button text="로그인" isRound={true} disabled={false} onClick={handleClickLoginButton} />
          <Button text="회원가입" isRound={true} disabled={false} onClick={handleClickJoinButton} />
        </ButtonContainer>
      </StyledContainer>
    </Wrap>
  );
}

const StyledContainer = styled.section`
  padding: 14.3125rem 1rem 2.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const ButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  button:last-child {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.inputTextUserColor};
  }
`;
