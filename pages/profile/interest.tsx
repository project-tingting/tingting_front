import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { ProfileSection } from '.';
import Button from '../../components/Button';
import Keyword from '../../components/Keyword';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import { ErrorText } from '../../components/UserInput';
import { Wrap } from '../../components/Wrap';

import { LeftMainText } from './mbti';

export default function interest() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (count === 3) {
      setIsDisabled(false);
    } else if (count > 3) {
      setIsDisabled(true);
      setIsError(true);
      setMsg('3개 이하만 선택 가능합니다');
    } else {
      setIsDisabled(true);
      setIsError(false);
      setMsg('');
    }
  });

  const isClicked = (clicked: boolean) => {
    clicked ? setCount(count - 1) : setCount(count + 1);
    console.log(count);
  };

  const handleContinueButton = () => {
    Router.push('/profile/alcohol');
  };
  return (
    <ProfileSection>
      <div>
        <Top text="프로필" />
        <ProgressBar stage={2} total={3} />
        <Wrap>
          <LeftMainText>관심사 키워드를 선택해주세요</LeftMainText>
          <Keyword text="게임" isClicked={isClicked} />
          <Keyword text="자기계발" isClicked={isClicked} />
          <Keyword text="스포츠" isClicked={isClicked} />
          <Keyword text="뷰티" isClicked={isClicked} />
          <Keyword text="패션" isClicked={isClicked} />
          <Keyword text="테크" isClicked={isClicked} />
          <Keyword text="음악" isClicked={isClicked} />
          <Keyword text="디자인" isClicked={isClicked} />
          <Keyword text="음식" isClicked={isClicked} />
          <Keyword text="예능" isClicked={isClicked} />
          <Keyword text="음료" isClicked={isClicked} />
          <Keyword text="여행" isClicked={isClicked} />
          <Keyword text="시사" isClicked={isClicked} />
          {isError && (
            <ErrorText>
              {msg} <span>*</span>
            </ErrorText>
          )}
        </Wrap>
      </div>
      <Wrap>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={isDisabled}
          isRound={true}
        />
      </Wrap>
    </ProfileSection>
  );
}
