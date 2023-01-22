import React, { useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import useInput from '../../util/hooks/useInput';
import useCheckUserInfo from '../../util/hooks/useCheckUserInfo';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';
import Container from '../../components/common/Container';
import InputContainer from '../../components/common/AnimationContainer';
import Guide from '../../components/common/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import InputMessage from '../../components/Join/InputMessage';

import Button from '../../components/common/Button';

export default function userinfo() {
  const [userId, handleUserId] = useInput('');
  const [password, handlePassword] = useInput('');

  const { isIdValid, isPasswordValid } = useCheckUserInfo(userId, password);

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
            sizing="large"
            placeholder="아이디"
            onChange={handleUserId}
            isIdValid={isIdValid}
            className={!isIdValid && userId ? 'error' : ''}
          />
          <InputMessage
            text={
              isIdValid
                ? '아이디가 이름으로 설정됩니다! *'
                : '아이디는 대, 소문자, 특수기호만 5~15자 이내로 가능합니다 *'
            }
          />
          {isIdValid && (
            <>
              <Blank />
              <StyledInput
                type="password"
                sizing="large"
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
