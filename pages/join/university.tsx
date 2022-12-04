import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useRecoilState } from 'recoil';
import useInput from '../../util/hooks/useInput';
import useValidateUniversity from '../../util/hooks/useValidateUniversity';
import useCheckValidation from '../../util/hooks/useCheckValidation';

import { userInfoState } from '../../core/recoil/userInfoAtom';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Container';
import InputContainer from '../../components/AnimationContainer';
import Guide from '../../components/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import Button from '../../components/Button';
import { ValidateButton } from '../../components/Join/FormElement';

export default function school() {
  const [schoolEmail, handleSchoolEmail] = useInput('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { handleClickValidateButton } = useValidateUniversity(userInfo);
  const { data } = useCheckValidation(schoolEmail);
  console.log(data);
  useEffect(() => {
    setUserInfo({ ...userInfo, userEmail: schoolEmail, university: '' });
  }, [schoolEmail]);

  const handleClickContinueButton = useCallback(() => {
    Router.push('/');
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
              size="large"
              placeholder="학교 웹메일"
              onChange={handleSchoolEmail}
            />
            <ValidateButton onClick={handleClickValidateButton}>인증</ValidateButton>
          </FormContainer>
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

const FormContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
