import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import InputContainer from '../../components/common/AnimationContainer';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Guide from '../../components/common/Guide';
import ProgressBar from '../../components/common/ProgressBar';
import Top from '../../components/common/Top';
import { usePostProfile } from '../../components/Profile/apiHooks/profile';
import SmokingButton from '../../components/Profile/SmokingButton';
import { userProfileState } from '../../core/recoil/userProfileAtom';

export default function smoking() {
  const [preferSmoke, setPreferSmoke] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const { mutate: postProfileMutate } = usePostProfile();

  const handleContinueButton = () => {
    setUserProfile([...userProfile, { topic: 'preferSmoking', valueList: preferSmoke }]);
    postProfileMutate(userProfile);
  };
  return (
    <>
      <Top text="팅팅 프로필" />
      <ProgressBar stage={4} total={4} />
      <Container>
        <InputContainer>
          <Guide text="흡연을 선호하시나요?" subText="대답에 따라 유형캐릭터가 달라집니다" />
        </InputContainer>
        <SmokingButtonContainer>
          <SmokingButton
            prefer="네"
            onClick={() => setPreferSmoke(['네'])}
            className={preferSmoke[0] === '네' ? 'selectedYes' : ''}
          />
          <SmokingButton
            prefer="아니요"
            onClick={() => setPreferSmoke(['아니요'])}
            className={preferSmoke[0] === '아니요' ? 'selectedNo' : ''}
          />
          <SmokingButton
            prefer="상관없어요"
            onClick={() => setPreferSmoke(['상관없어요'])}
            className={preferSmoke[0] === '상관없어요' ? 'selectedNo' : ''}
          />
        </SmokingButtonContainer>
        <Button
          onClick={handleContinueButton}
          text="계속하기"
          disabled={preferSmoke.length === 0}
          isRound={true}
        />
      </Container>
    </>
  );
}

const SmokingButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;
