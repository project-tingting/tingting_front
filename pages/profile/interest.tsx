import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ProfileType, userProfileState } from '../../core/recoil/userProfileAtom';

import InputContainer from '../../components/common/AnimationContainer';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Guide from '../../components/common/Guide';
import ProgressBar from '../../components/common/ProgressBar';
import Top from '../../components/common/Top';
import { ErrorText } from '../../components/common/UserInput';
import Keyword, { interestData } from '../../components/common/Keyword';

export default function interest() {
  const profile = useRecoilValue(userProfileState);
  const setUserProfile = useSetRecoilState(userProfileState);

  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    if (count === 0) {
      setIsDisabled(true);
      setIsError(false);
    } else if (count > 3) {
      setIsDisabled(true);
      setIsError(true);
      setMsg('3개 이하만 선택 가능합니다');
    } else {
      setIsDisabled(false);
      setIsError(false);
      setMsg('');
    }
  });

  const handleOnClicked = (onclick: boolean, text: string) => {
    if (onclick) {
      setCount(count - 1);
      setKeywords(keywords.filter((keyword) => keyword !== text));
    } else {
      setCount(count + 1);
      setKeywords([text, ...keywords]);
    }
  };

  const handleContinueButton = () => {
    setUserProfile((prev: ProfileType[]) => [
      ...prev,
      {
        topic: 'interestKeyword',
        valueList: keywords,
      },
    ]);
    console.log('interest', profile);
    console.log('interest', keywords);
    Router.push('/profile/alcohol');
  };

  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={2} total={3} />
      <Container>
        <InputContainer>
          <Guide text="관심사 키워드를 선택해주세요" />
          {interestData.map((text: string) => (
            <Keyword key={text} text={text} onClicked={handleOnClicked} />
          ))}
          {isError && (
            <ErrorText>
              {msg} <span>*</span>
            </ErrorText>
          )}
          <Button
            onClick={handleContinueButton}
            text="계속하기"
            disabled={isDisabled}
            isRound={true}
          />
        </InputContainer>
      </Container>
    </>
  );
}
