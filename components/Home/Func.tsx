import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';
import { useStartMatch } from '../../core/apiHooks/matching';
import { matchingInfoState } from '../../core/recoil/matchingInfoAtom';

import LoadingModal from './LoadingModal/LoadingModal';
import { StartButton } from './HomeComponents';

export default function Func() {
  const matchInfo = useRecoilValue(matchingInfoState);
  const { data } = useGetRoomKeyInfo();
  console.log(data);
  const { mutate: startMatch } = useStartMatch();
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);

  const handleClickStartButton = () => {
    setIsLoadingModalOpen(true);
    if (!data?.data.data.meetingRoomUser?.roomKey) {
      setTokenNum((prev) => prev - 1);
      startMatch(matchInfo.partyNum / 2);
    }
  };

  return (
    <>
      {isLoadingModalOpen && <LoadingModal setIsLoadingModal={setIsLoadingModalOpen} />}
      <StyledContainer>
        <StartButton onClick={handleClickStartButton}>
          {!data?.data?.data?.meetingRoomUser?.roomKey ? 'START' : '매칭중'}
        </StartButton>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 8rem 0 4.4rem;
  text-align: center;
`;
