import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Notice from '../../components/common/Notice';
import characters from '../../public/assets/images/characters.svg';

export default function index() {
  return (
    <Notice message="바로 프로필을 설정하시겠어요?">
      <ImageContainer>
        <Image src={characters} />
      </ImageContainer>
      <ButtonGroup>
        <StyledButton onClick={() => Router.push('/')}>아니요</StyledButton>
        <StyledButton onClick={() => Router.push('/profile/mbti')}>예</StyledButton>
      </ButtonGroup>
    </Notice>
  );
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2.4rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  cursor: 'pointer';
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 100%;
`;

const ButtonGroup = styled.div`
  max-width: 43rem;
  display: flex;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2.1rem 0;
  & button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.buttonDisabledColor};
  }
  & button {
    flex: 1 1 0;
  }
`;

const ImageContainer = styled.div`
  margin: 7.5rem 2.2rem;
`;
