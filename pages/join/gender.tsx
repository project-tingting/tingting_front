import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import Button from '../../components/Button';
import GenderButton from '../../components/Join/GenderButton';

export default function sex() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [gender, setGender] = useState('');

  useEffect(() => {
    setUserInfo({ ...userInfo, gender: gender });
  }, [gender]);

  const handleClickMaleButton = () => {
    setGender('male');
  };

  const handleClickFemaleButton = () => {
    setGender('female');
  };

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/school');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={3} />
      <Container>
        <InputContainer>
          <Guide text="성별을 알려주세요" />
        </InputContainer>
        <GenderButtonContainer>
          <GenderButton gender="male" onClick={handleClickMaleButton} />
          <GenderButton gender="female" onClick={handleClickFemaleButton} />
        </GenderButtonContainer>
        <Button
          onClick={handleClickContinueButton}
          isRound={true}
          disabled={!gender}
          text="계속하기"
        />
      </Container>
    </>
  );
}

const GenderButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: -554px;
`;
