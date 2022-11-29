import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';
import { checkIdValid } from '../../util/checkIdValid';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Container';
import InputContainer from '../../components/AnimationContainer';
import Guide from '../../components/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import InputMessage from '../../components/Join/InputMessage';
import Button from '../../components/Button';
import useInput from '../../util/hooks/useInput';

export default function nickname() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [userId, handleUserId] = useInput('');
  const [password, handlePassword] = useInput('');
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    checkIdValid(userId) ? setIsIdValid(true) : setIsIdValid(false);
    password.length >= 8 ? setIsPasswordValid(true) : setIsPasswordValid(false);
    setUserInfo({ ...userInfo, userId: userId, password: password });
  }, [userId, password]);

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/year');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={1} total={4} />
      <Container>
        <InputContainer>
          <Guide text={isIdValid ? '비밀번호를 설정해주세요' : '아이디를 설정해주세요'} />
          <StyledInput
            type="text"
            size="large"
            placeholder="아이디"
            onChange={handleUserId}
            isIdValid={isIdValid}
            className={!isIdValid && userId ? 'error' : ''}
          />
          <InputMessage
            text={
              isIdValid
                ? '아이디가 이름으로 설정됩니다! *'
                : '아이디는 대, 소문자, 특수기호만 가능합니다 *'
            }
          />
          {isIdValid && (
            <>
              <Blank />
              <StyledInput
                type="password"
                size="large"
                placeholder="비밀번호"
                isPasswordValid={isPasswordValid}
                onChange={handlePassword}
                className={!isPasswordValid && password ? 'error' : ''}
              />
              {!isPasswordValid && <InputMessage text="8자 이상이 필요합니다 *" />}
            </>
          )}
        </InputContainer>
        <Button
          onClick={handleClickContinueButton}
          isRound={true}
          disabled={!(isIdValid && isPasswordValid)}
          text="계속하기"
        />
      </Container>
    </>
  );
}

const Blank = styled.div`
  height: 52px;
`;
