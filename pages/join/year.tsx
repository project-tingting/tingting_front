import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useRecoilState } from 'recoil';

import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';
import Container from '../../components/common/Container';
import InputContainer from '../../components/common/AnimationContainer';
import Guide from '../../components/common/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/common/Button';
import useInput from '../../util/hooks/useInput';

export default function year() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [birthDay, handleBirthDay] = useInput('2003');

  useEffect(() => {
    setUserInfo({ ...userInfo, birthDay: birthDay });
  }, [birthDay]);

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
          <StyledInput type="number" sizing="large" placeholder="2003" onChange={handleBirthDay} />
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
