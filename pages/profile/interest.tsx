import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import InputContainer from '../../components/AnimationContainer';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Guide from '../../components/Guide';
import Keyword from '../../components/Keyword';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import { ErrorText } from '../../components/UserInput';

export default function interest() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const interest = ['게임', '자기계발', '스포츠', '뷰티'];

  useEffect(() => {
    if (count <= 3 && count !== 0) {
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

  const isClicked = (onclick: boolean) => {
    onclick ? setCount(count - 1) : setCount(count + 1);
  };

  const handleContinueButton = () => {
    Router.push('/profile/alcohol');
  };
  return (
    <>
      <Top text="프로필" />
      <ProgressBar stage={2} total={3} />
      <Container>
        <InputContainer>
          <Guide text="관심사 키워드를 선택해주세요" />
          {interest.map((text) => (
            <Keyword key={text} text={text} isClicked={isClicked} />
          ))}
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
