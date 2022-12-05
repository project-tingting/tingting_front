import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import TingTingLogo from '../../public/assets/icons/tingting_logo.svg';
import useLoginForm from '../../util/hooks/useLoginForm';

import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/Button';
import useInput from '../../util/hooks/useInput';

export default function index() {
  const [userId, handleUserId] = useInput('');
  const [password, handlePassword] = useInput('');

  const { submitLoginForm } = useLoginForm(userId, password);
  return (
    <StyledContainer>
      <Image src={TingTingLogo} alt="팅팅 로고" />
      <FormContainer onSubmit={submitLoginForm}>
        <StyledInput size="small" placeholder="아이디" type="text" onChange={handleUserId} />
        <StyledInput
          size="small"
          placeholder="비밀번호"
          type="password"
          onChange={handlePassword}
        />
        <Button text="로그인" isRound={true} disabled={!userId || !password} />
      </FormContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: 14.3125rem 1rem 2.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
