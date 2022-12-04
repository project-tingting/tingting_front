import React, { useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import useHandleGender from '../../util/hooks/useHandleGender';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Container';
import InputContainer from '../../components/AnimationContainer';
import Guide from '../../components/Guide';
import Button from '../../components/Button';
import GenderButton from '../../components/Join/GenderButton';

export default function sex() {
  const { gender, handleClickMaleButton, handleClickFemaleButton } = useHandleGender();

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/university');
  }, []);

  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={3} total={4} />
      <Container>
        <InputContainer>
          <Guide text="성별을 알려주세요" />
        </InputContainer>
        <GenderButtonContainer>
          <GenderButton
            gender="male"
            onClick={handleClickMaleButton}
            className={gender === 'male' ? 'maleClicked' : ''}
          />
          <GenderButton
            gender="female"
            onClick={handleClickFemaleButton}
            className={gender === 'female' ? 'femaleClicked' : ''}
          />
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
