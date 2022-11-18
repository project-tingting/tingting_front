import React, { useCallback, useState } from 'react';
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

export default function nickname() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [userName, setUserName] = useState('');

  const handleNickNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  console.log(userName);

  const handleClickContinueButton = useCallback(() => {
    console.log(userName);
    Router.push('/join/year');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={1} />
      <Container>
        <InputContainer>
          <Guide text="닉네임을 입력해주세요" />
          <StyledInput
            type="text"
            size="large"
            placeholder="닉네임"
            onChange={handleNickNameInput}
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
