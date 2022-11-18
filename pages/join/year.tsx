import React, { useCallback } from 'react';
import Router from 'next/router';
import { useRecoilState } from 'recoil';

import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/Button';

export default function year() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  console.log(userInfo);
  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/school');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={2} />
      <Container>
        <InputContainer>
          <Guide text="출생연도를 입력해주세요" />
          <StyledInput type="number" size="large" placeholder="2003" />
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
