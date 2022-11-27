import React, { useCallback, useEffect, useState } from 'react';
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
  const [birthYear, setBirthYear] = useState('2003');

  useEffect(() => {
    setUserInfo({ ...userInfo, birthYear: birthYear });
  }, [birthYear]);

  const handleBirthYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthYear(e.target.value);
  };
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
          <StyledInput
            type="number"
            size="large"
            placeholder="2003"
            onChange={handleBirthYearInput}
          />
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
