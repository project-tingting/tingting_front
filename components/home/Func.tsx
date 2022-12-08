import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import LoadingModal from './LoadingModal/LoadingModal';
import { StartButton } from './HomeComponents';
import TokenIcon from '../../public/assets/icons/token.svg';

export default function Func() {
  const [tokenNum, setTokenNum] = useState(5);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const handleClickStartButton = () => {
    setTokenNum((prev) => prev - 1);
    setIsLoadingModalOpen(true);
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
      {isLoadingModalOpen && <LoadingModal />}
      <StyledContainer>
        <StartButton onClick={handleClickStartButton}>START</StartButton>
        <TokenContainer>{renderTokenComponent()}</TokenContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 202px 0 44px;
  text-align: center;
`;

const TokenContainer = styled.section`
  display: flex;
  gap: 4px;
  justify-content: center;
  padding-top: 20px;
`;
