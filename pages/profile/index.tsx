import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Notice from '../../components/Notice';

export default function index() {
  const handleNoButton = () => console.log('아니요!');
  const handleYesButton = () => {
    Router.push('/profile/mbti');
  };
  return (
    <>
      <Notice message="바로 프로필을 설정하시겠어요?">
        <ButtonGroup>
          <Button onClick={handleNoButton} text="아니요" disabled={false} isRound={false} />
          <Button onClick={handleYesButton} text="예" disabled={false} isRound={false} />
        </ButtonGroup>
      </Notice>
    </>
  );
}

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
