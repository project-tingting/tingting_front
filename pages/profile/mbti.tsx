import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainText } from '.';
import Button from '../../components/Button';
import Container from '../../components/Join/Container';
import Guide from '../../components/Join/Guide';
import InputContainer from '../../components/Join/InputContainer';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import UserInput, { ErrorText } from '../../components/UserInput';

export default function mbti() {
  const [userMbti, setUserMbti] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const MBTIRegex = /(e|i)(n|s)(f|t)(p|j)/gi;

  useEffect(() => {
    if (userMbti === '' || userMbti.length !== 4) {
      setIsDisabled(true);
    } else if (!MBTIRegex.test(userMbti)) {
      setMsg('MBTI가 올바르지 않습니다');
      setIsError(true);
    } else {
      setIsDisabled(false);
      setMsg('');
      setIsError(false);
    }
  }, [userMbti]);

  const handleMbtiInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMbti(e.target.value);
  };
  const handleContinueButton = () => {
    Router.push('/profile/interest');
  };
  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={1} total={3} />
      <Container>
        <div>
          <Guide text="MBTI를 알려주세요" />
          <UserInput
            type="text"
            size="small"
            text="ENFP"
            onChange={handleMbtiInput}
            classname={`${isError ? 'error' : ''}`}
          />
          {isError && (
            <ErrorText>
              {msg} <span>*</span>
            </ErrorText>
          )}
        </div>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={isDisabled}
          isRound={true}
        />
      </Container>
    </>
  );
}

export const LeftMainText = styled(MainText)`
  text-align: left;
  padding-bottom: 4.8rem;
`;