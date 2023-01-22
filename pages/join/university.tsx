import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import useInput from '../../util/hooks/useInput';
import useValidateUniversity from '../../util/hooks/useValidateUniversity';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';
import Container from '../../components/common/Container';
import InputContainer from '../../components/common/AnimationContainer';
import Guide from '../../components/common/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/common/Button';
import { ValidateButton } from '../../components/Join/FormElement';
import InputMessage from '../../components/Join/InputMessage';

export default function school() {
  const [schoolEmail, handleSchoolEmail] = useInput('');
  const { handleClickValidateButton, data, isClickValidateButton } =
    useValidateUniversity(schoolEmail);

  const handleClickContinueButton = useCallback(() => {
    Router.push('/join/completed');
  }, []);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={4} total={4} />
      <Container>
        <InputContainer>
          <Guide text="다니는 학교를 알려주세요" />
          <FormContainer>
            <StyledInput
              type="email"
              sizing="large"
              placeholder="학교 웹메일"
              onChange={handleSchoolEmail}
            />
            <ValidateButton onClick={handleClickValidateButton}>인증</ValidateButton>
          </FormContainer>
          {isClickValidateButton && !data && (
            <InputMessage text="인증메일을 보냈습니다. 메일을 확인해주세요." />
          )}
          {data && <InputMessage text="인증이 완료되었습니다." />}
        </InputContainer>
        <Button
          onClick={handleClickContinueButton}
          isRound={true}
          disabled={!data}
          text="계속하기"
        />
      </Container>
    </>
  );
}

const FormContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
