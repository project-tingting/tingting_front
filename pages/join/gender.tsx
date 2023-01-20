import React, { useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import useHandleGender from '../../util/hooks/useHandleGender';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';
import Container from '../../components/common/Container';
import InputContainer from '../../components/common/AnimationContainer';
import Guide from '../../components/common/Guide';
import Button from '../../components/common/Button';
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
          <GenderButtonContainer>
            <GenderButton
              gender="male"
              onClick={handleClickMaleButton}
              className={gender === 'm' ? 'maleClicked' : ''}
            />
            <GenderButton
              gender="female"
              onClick={handleClickFemaleButton}
              className={gender === 'w' ? 'femaleClicked' : ''}
            />
          </GenderButtonContainer>
        </InputContainer>
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
`;
