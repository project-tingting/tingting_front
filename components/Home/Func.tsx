import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';

import LoadingModal from './LoadingModal/LoadingModal';
import { StartButton } from './HomeComponents';

export default function Func() {
  const { data } = useGetRoomKeyInfo();
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);

  const handleClickStartButton = () => {
    setIsLoadingModalOpen((prev) => !prev);
  };

  return (
    <>
      {isLoadingModalOpen && <LoadingModal setIsLoadingModal={setIsLoadingModalOpen} />}
      <StyledContainer>
        <StartButton onClick={handleClickStartButton}>
          {!data?.data?.data?.meetingRoomUser?.roomKey ? '팅' : '매칭중'}
        </StartButton>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 8rem 0 4.4rem;
  text-align: center;
  margin-bottom: 7rem;
`;
