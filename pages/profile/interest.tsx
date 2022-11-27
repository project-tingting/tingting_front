import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ProfileSection } from '.';
import Button from '../../components/Button';
import Keyword from '../../components/Keyword';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import { Wrap } from '../../components/Wrap';
import { onKeywordSelector } from '../../core/recoil/keyword';
import { LeftMainText } from './mbti';

export default function interest() {
  // const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const keywordList = useRecoilValue(onKeywordSelector);
  // const onClickKeyword = () => {
  //   setIsDisabled(!isDisabled);
  // };
  useEffect(() => {
    if (keywordList.length > 3) {
      console.log('3개이상임!');
    }
  });

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
          <Keyword text="게임" />
          <Keyword text="자기계발" />
          <Keyword text="스포츠" />
          <Keyword text="뷰티" />
          <Keyword text="패션" />
          <Keyword text="테크" />
          <Keyword text="음악" />
          <Keyword text="디자인" />
          <Keyword text="음식" />
          <Keyword text="예능" />
          <Keyword text="음료" />
          <Keyword text="여행" />
          <Keyword text="시사" />
        </Wrap>
      </div>
      <Wrap>
        <Button onClick={handleContinueButton} text="계속하기" disabled={false} isRound={true} />
      </Wrap>
    </ProfileSection>
  );
}
