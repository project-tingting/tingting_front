import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { ProfileType, userProfileState } from '../../core/recoil/userProfileAtom';

import InputContainer from '../../components/common/AnimationContainer';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Guide from '../../components/common/Guide';
import ProgressBar from '../../components/common/ProgressBar';
import Top from '../../components/common/Top';
import UserInput, { ErrorText } from '../../components/common/UserInput';

export default function mbti() {
  const setUserProfile = useSetRecoilState(userProfileState);
  const [userMbti, setUserMbti] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const MBTIRegex = /(e|i)(n|s)(f|t)(p|j)/gi;

  useEffect(() => {
    if (!userMbti.length || userMbti[0].length !== 4) {
      setIsDisabled(true);
    } else if (!MBTIRegex.test(userMbti[0])) {
      setMsg('MBTI가 올바르지 않습니다');
      setIsError(true);
    } else {
      setIsDisabled(false);
      setMsg('');
      setIsError(false);
    }
  }, [userMbti]);

  const handleMbtiInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMbti([e.target.value.toUpperCase()]);
  };
  const handleContinueButton = () => {
    setUserProfile((prev: ProfileType[]) => [
      ...prev,
      {
        topic: 'mbti',
        valueList: userMbti,
      },
    ]);
    console.log('mbti', userMbti);
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
            sizing="small"
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
