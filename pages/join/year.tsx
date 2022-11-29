import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useRecoilState } from 'recoil';

import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Container';
import InputContainer from '../../components/AnimationContainer';
import Guide from '../../components/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/Button';
import useInput from '../../util/hooks/useInput';

export default function year() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [birthYear, handleBirthYear] = useInput('2003');

  useEffect(() => {
    setUserInfo({ ...userInfo, birthYear: birthYear });
  }, [birthYear]);

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/gender');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={2} total={4} />
      <Container>
        <InputContainer>
          <Guide text="출생연도를 입력해주세요" />
          <StyledInput type="number" size="large" placeholder="2003" onChange={handleBirthYear} />
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
