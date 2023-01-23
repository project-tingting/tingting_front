import Router from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { userProfileState } from '../../core/recoil/userProfileAtom';

import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import Top from '../../components/common/Top';

import InputContainer from '../../components/common/AnimationContainer';
import Container from '../../components/common/Container';
import Guide from '../../components/common/Guide';
import AlcoholButton from '../../components/Profile/AlcoholButton';

export default function alcohol() {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [alcohol, setAlcohol] = useState<string[]>([]);

  const handleContinueButton = () => {
    setUserProfile([...userProfile, { topic: 'isDrink', valueList: alcohol }]);
    Router.push('/profile/smoking');
  };

  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={3} total={4} />
      <Container>
        <InputContainer>
          <Guide text="술은 얼마나 드시나요?" subText="대답에 따라 유형캐릭터가 달라집니다"></Guide>
        </InputContainer>
        <AlcoholButtonContainer>
          <AlcoholButton
            drinking="안함"
            onClick={() => setAlcohol(['안함'])}
            className={alcohol[0] === '안함' ? 'selectedNever' : ''}
          />
          <AlcoholButton
            drinking="가끔"
            onClick={() => setAlcohol(['가끔'])}
            className={alcohol[0] === '가끔' ? 'selectedSometimes' : ''}
          />
          <AlcoholButton
            drinking="자주"
            onClick={() => setAlcohol(['자주'])}
            className={alcohol[0] === '자주' ? 'selectedOften' : ''}
          />
        </AlcoholButtonContainer>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={alcohol.length === 0}
          isRound={true}
        />
      </Container>
    </>
  );
}

const AlcoholButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;
