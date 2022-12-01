import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { userProfileState } from '../../core/recoil/userProfileAtom';

import InputContainer from '../../components/AnimationContainer';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Guide from '../../components/Guide';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import UserInput, { ErrorText } from '../../components/UserInput';

export default function mbti() {
  const setUserProfile = useSetRecoilState(userProfileState);
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
      setUserProfile({ topic: 'mbti', value: userMbti });
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
        <InputContainer>
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
        </InputContainer>
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
