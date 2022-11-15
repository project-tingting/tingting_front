import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
// import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';

import { pageNumState } from '../../core/recoil/pageNumAtom';

import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import Button from '../../components/Button';
import { StyledInput } from '../Join/FormElement';

export default function JoinForm() {
  const [pageNum, setPageNum] = useRecoilState(pageNumState);
  const onClickContinueButton = useCallback(() => {
    setPageNum((prev) => prev + 1);
  }, []);
  return (
    <Container>
      <AnimatePresence>
        {pageNum === 1 ? (
          <InputContainer>
            <Guide text="닉네임을 지어주세요" />
            <StyledInput type="text" size="large" placeholder="닉네임" />
          </InputContainer>
        ) : pageNum === 2 ? (
          <InputContainer>
            <Guide text="출생연도를 알려주세요" />
            <StyledInput type="number" size="large" placeholder="2003" />
          </InputContainer>
        ) : pageNum === 3 ? (
          <InputContainer>
            <Guide text="다니는 학교를 알려주세요" />
            <StyledInput type="text" size="large" placeholder="대학교" />
          </InputContainer>
        ) : (
          <InputContainer>
            <Guide text="성별을 알려주세요" />
          </InputContainer>
        )}
      </AnimatePresence>
      <Button onClick={onClickContinueButton} isRound={true} disabled={false} text="계속하기" />
    </Container>
  );
}
