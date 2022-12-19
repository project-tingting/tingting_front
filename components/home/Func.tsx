import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Image from 'next/image';
import { useGetRoomKeyInfo } from '../../core/apiHooks/matching';
import { useStartMatch } from '../../core/apiHooks/matching';
import { matchingInfoState } from '../../core/recoil/matchingInfoAtom';

import LoadingModal from './LoadingModal/LoadingModal';
import { StartButton } from './HomeComponents';
import TokenIcon from '../../public/assets/icons/token.svg';

export default function Func() {
  const matchInfo = useRecoilValue(matchingInfoState);
  const { data } = useGetRoomKeyInfo();
  const { mutate: startMatch } = useStartMatch();
  const [tokenNum, setTokenNum] = useState(5);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);

  const handleClickStartButton = () => {
    setIsLoadingModalOpen(true);
    if (!data?.data.data.meetingRoomUser.roomKey) {
      setTokenNum((prev) => prev - 1);
      startMatch(matchInfo.partyNum / 2);
    }
  };

  const renderTokenComponent = () => {
    const result = [];
    for (let i = 0; i < tokenNum; i++) {
      result.push(<Image src={TokenIcon} alt="토큰" />);
    }
    return result;
  };
  return (
    <>
      {isLoadingModalOpen && <LoadingModal setIsLoadingModal={setIsLoadingModalOpen} />}
      <StyledContainer>
        <StartButton onClick={handleClickStartButton}>
          {!data?.data.data.meetingRoomUser.roomKey ? 'START' : '매칭중'}
        </StartButton>
        {/* <TokenContainer>{renderTokenComponent()}</TokenContainer> */}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 8rem 0 4.4rem;
  text-align: center;
`;

const TokenContainer = styled.section`
  display: flex;
  gap: 4px;
  justify-content: center;
  padding-top: 20px;
`;
