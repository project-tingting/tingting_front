import Router from 'next/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { userProfileState } from '../../core/recoil/userProfileAtom';

import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import Top from '../../components/common/Top';
import purpleO from '../../public/assets/icons/purpleO.svg';
import purpleX from '../../public/assets/icons/purpleX.svg';
import whiteO from '../../public/assets/icons/whiteO.svg';
import whiteX from '../../public/assets/icons/whiteX.svg';

import InputContainer from '../../components/common/AnimationContainer';
import Container from '../../components/common/Container';
import Guide from '../../components/common/Guide';

export default function alcohol() {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [alcohol, setAlcohol] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!alcohol.length) setIsDisabled(true);
    else {
      setIsDisabled(false);
    }
  }, [alcohol]);
  const handleContinueButton = () => {
    setUserProfile([...userProfile, { topic: 'isDrink', valueList: alcohol }]);
    console.log('userprofile', userProfile);
    console.log('alcohol', alcohol);
    Router.push('/profile/completed');
  };
  const handleOButton = () => {
    setAlcohol(['1']);
  };
  const handleXButton = () => {
    setAlcohol(['0']);
  };
  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={3} total={3} />
      <Container>
        <InputContainer>
          <Guide text="술을 선호하시나요?"></Guide>
          <OXButtonGroup>
            <OXButton onClick={handleOButton} className={alcohol[0] === '1' ? 'clicked' : ''}>
              <Image src={alcohol[0] === '1' ? whiteO : purpleO} />
            </OXButton>
            <OXButton onClick={handleXButton} className={alcohol[0] === '0' ? 'clicked' : ''}>
              <Image src={alcohol[0] === '0' ? whiteX : purpleX} />
            </OXButton>
          </OXButtonGroup>
        </InputContainer>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={isDisabled}
          isRound={true}
        />
      </Container>
    </>
  );
}

export const OXButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.6rem;
`;
export const OXButton = styled.button`
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
