import React, { useCallback } from 'react';
import Router from 'next/router';
import { useRecoilValue } from 'recoil';

import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/Button';

export default function school() {
  const userInfo = useRecoilValue(userInfoState);
  console.log(userInfo);
  const handleClickContinueButton = useCallback(() => {
    Router.push('/');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={4} />
      <Container>
        <InputContainer>
          <Guide text="다니는 학교를 알려주세요" />
          <StyledInput type="text" size="large" placeholder="대학교" />
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
