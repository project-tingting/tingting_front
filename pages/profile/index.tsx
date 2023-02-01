import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Guide from '../../components/common/Guide';

import profileFrame from '../../public/assets/images/profileFrame.svg';

export default function index() {
  return (
    <>
      <Guide
        text="바로 매칭 프로필을 설정하시겠어요?"
        subText="선호에 가까운 친구들을 추천해드려요"
        isNotice={true}
      />
      <ImageContainer>
        <Image src={profileFrame} />
      </ImageContainer>
      <ButtonGroup>
        <StyledButton onClick={() => Router.push('/')}>나중에</StyledButton>
        <StyledButton onClick={() => Router.push('/profile/mbti')}>예</StyledButton>
      </ButtonGroup>
    </>
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
  text-align: center;
`;
