import React, { useState } from 'react';
import { checkPhoneNumValid } from '../../util/checkIdValid';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';
import Container from '../../components/common/Container';
import InputContainer from '../../components/common/AnimationContainer';
import Guide from '../../components/common/Guide';
import { StyledInput } from '../../components/Join/FormElement';
import InputMessage from '../../components/Join/InputMessage';
import Button from '../../components/common/Button';

export default function phone() {
  const [isPhoneNumValidate, setIsPhoneNumValidate] = useState(false);
  const handlePhoneNumInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPhoneNumValidate(checkPhoneNumValid(e.target.value));
  };

  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={5} total={5} />
      <Container>
        <InputContainer>
          <Guide text="전화번호를 입력해주세요" />
          <StyledInput sizing="large" onChange={handlePhoneNumInput} />
          <InputMessage text="010-0000-0000 형식으로 입력해주세요." />
        </InputContainer>
      </Container>
      <Button text="인증" isRound={true} disabled={!isPhoneNumValidate} />
    </>
  );
}
