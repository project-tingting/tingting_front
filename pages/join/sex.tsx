import React, { useCallback } from 'react';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import Button from '../../components/Button';

export default function sex() {
  const handleClickContinueButton = useCallback(() => {
    console.log('hi');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={4} />
      <Container>
        <InputContainer>
          <Guide text="성별을 알려주세요" />
        </InputContainer>
        <Button
          onClick={handleClickContinueButton}
          isRound={true}
          disabled={false}
          text="계속하기"
        />
      </Container>
    </>
  );
}
