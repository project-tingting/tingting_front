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
import { ErrorText } from '../../components/common/UserInput';
import Keyword, { interestData } from '../../components/common/Keyword';
import styled from 'styled-components';

export default function interest() {
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
    Router.push('/profile/alcohol');
  };

  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={2} total={4} />
      <Container>
        <InputContainer>
          <Guide
            text="관심사 키워드를 선택해주세요"
            subText="대답에 따라 유형캐릭터가 달라집니다"
          />
          <KeywordContainer>
            {interestData.map((text: string) => (
              <Keyword key={text} text={text} onClicked={handleOnClicked} />
            ))}
          </KeywordContainer>
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

const KeywordContainer = styled.article`
  margin-top: 2.8rem;
`;
