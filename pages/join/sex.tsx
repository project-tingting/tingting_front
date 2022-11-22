import React, { useCallback } from 'react';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import Container from '../../components/Join/Container';
import InputContainer from '../../components/Join/InputContainer';
import Guide from '../../components/Join/Guide';
import Button from '../../components/Button';
import { registerAPI } from '../../core/api/registerAPI';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';
import { useQuery } from '@tanstack/react-query';
import { RegisterProps } from '../../types/user';

export default function sex() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery<RegisterProps>(['register'], () => registerAPI(userInfo));

  const handleClickContinueButton = useCallback(() => {
    console.log('hi');
    registerAPI(userInfo);
  }, [data]);
  return (
    <>
      <Top text="회원가입" />
      <ProgressBar stage={4} />
      <Container>
        <InputContainer>
          <Guide text="성별을 알려주세요" />
        </InputContainer>
        <Button
          onClick={handleClickContinueButton}
          isRound={true}
          disabled={false}
          text="계속하기"
        />
      </Container>
    </>
  );
}
