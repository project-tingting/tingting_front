import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileSection } from '.';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import { Wrap } from '../../components/Wrap';
import { LeftMainText } from './mbti';
import purpleO from '../../public/assets/icons/purpleO.svg';
import purpleX from '../../public/assets/icons/purpleX.svg';
import whiteO from '../../public/assets/icons/whiteO.svg';
import whiteX from '../../public/assets/icons/whiteX.svg';
import Router from 'next/router';

export default function alcohol() {
  const [alcohol, setAlcohol] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (alcohol === '') setIsDisabled(true);
    else setIsDisabled(false);
  });
  const handleContinueButton = () => {
    Router.push('/profile/completed');
  };
  const handleOButton = () => {
    setAlcohol('O');
  };
  const handleXButton = () => {
    setAlcohol('X');
  };
  return (
    <ProfileSection>
      <div>
        <Top text="프로필" />
        <ProgressBar stage={3} total={3} />
        <Wrap>
          <LeftMainText>술을 선호하시나요?</LeftMainText>
          <OXButtonGroup>
            <OXButton onClick={handleOButton} className={alcohol === 'O' ? 'clicked' : ''}>
              <Image src={alcohol === 'O' ? whiteO : purpleO} />
            </OXButton>
            <OXButton onClick={handleXButton} className={alcohol === 'X' ? 'clicked' : ''}>
              <Image src={alcohol === 'X' ? whiteX : purpleX} />
            </OXButton>
          </OXButtonGroup>
        </Wrap>
      </div>
      <Wrap>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={isDisabled}
          isRound={true}
        />
      </Wrap>
    </ProfileSection>
  );
}

const OXButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.6rem;
`;
const OXButton = styled.button`
  padding: 6.6rem;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  &.clicked {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  &:active {
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    position: relative;
    top: 0.2rem;
  }
`;
