import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import { useUserLogin } from '../../core/apiHooks/user';

import TingTingLogo from '../../public/assets/icons/SmallLogo.svg';
import { StyledInput } from '../../components/Join/FormElement';
import LoginButton from '../../components/Login/LoginButton';
import useInput from '../../util/hooks/useInput';
import ErrorMessage from '../../components/Join/ErrorMessage';

export default function index() {
  const [userId, handleUserId] = useInput('');
  const [password, handlePassword] = useInput('');

  const { mutate: submitLogin, data: status_code } = useUserLogin({ userId, password });

  const handleClickJoinButton = () => {
    Router.push('/join/userinfo');
  };

  return (
    <StyledContainer>
      <Image src={TingTingLogo} alt="팅팅 로고" priority={true} />
      <FormContainer onSubmit={submitLogin}>
        <InputContainer>
          <StyledInput sizing="small" placeholder="아이디" type="text" onChange={handleUserId} />
          <StyledInput
            sizing="small"
            placeholder="비밀번호"
            type="password"
            onChange={handlePassword}
          />
          {status_code?.data.data.code === 400 && (
            <ErrorMessage text="아이디 혹은 비밀번호를 잘못 입력했습니다." />
          )}
        </InputContainer>
        <LoginButton text="로그인" isRound={true} disabled={!userId || !password} />
        <OptionContainer>
          <Option>아이디 찾기</Option>
          <Option>비밀번호 찾기</Option>
          <Option onClick={handleClickJoinButton}>회원가입</Option>
        </OptionContainer>
      </FormContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: 14.3125rem 1.6rem 18.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3.2rem 2.4rem;
  height: 39rem;
  width: 100%;
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const OptionContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;

  li {
    text-align: center;
  }

  li:first-child,
  li:nth-child(2) {
    border-right: 1px solid #adb3bc;
  }
  /* 
  li:first-child {
    text-align: right;
  }

  li:nth-child(2) {
    text-align: center;
  }

  li:last-child {
    text-align: left;
  } */
`;

const Option = styled.li`
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.colors.subTitleColor};
  width: calc(100% / 3);
  /* padding: 0 1.2rem; */
  cursor: pointer;
`;
