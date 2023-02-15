import React, { useCallback, useState } from 'react';
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

export default function year() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleButtonAbled = (year: number) => {
    if (year < 1990 || year > 2004) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const onChangeYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, birthDay: e.target.value });
    handleButtonAbled(Number(e.target.value));
  };

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/gender');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={2} total={5} />
      <Container>
        <InputContainer>
          <Guide text="출생연도를 입력해주세요" />
          <StyledInput
            type="number"
            sizing="large"
            placeholder="2003"
            min="1990"
            max="2004"
            onChange={onChangeYearInput}
          />
        </InputContainer>
      </Container>
      <Button
        onClick={handleClickContinueButton}
        isRound={true}
        disabled={isButtonDisabled}
        text="계속하기"
      />
    </>
  );
}
