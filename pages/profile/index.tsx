import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Notice from '../../components/Notice';

export default function index() {
  const handleNoButton = () => {
    Router.push('/');
  }; // HOME으로 바꾸기
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

const ButtonGroup = styled.div`
  display: flex;
  & button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.buttonDisabledColor};
  }
`;
