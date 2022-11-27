import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

export default function index() {
  const handleCancleButton = () => console.log('아니요!');
  const handleYesButton = () => {
    // console.log('예!');
    Router.push('/profile/mbti');
  };
  return (
    <ProfileSection>
      <MainText>바로 프로필을 설정하시겠어요?</MainText>
      <ButtonGroup>
        <Button onClick={handleCancleButton} text="아니요" disabled={false} isRound={false} />
        <Button onClick={handleYesButton} text="예" disabled={false} isRound={false} />
      </ButtonGroup>
    </ProfileSection>
  );
}

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const MainText = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  text-align: center;
  padding-top: 5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  & button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.buttonDisabledColor};
  }
`;
