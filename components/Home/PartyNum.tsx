import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { matchingInfoState } from '../../core/recoil/matchingInfoAtom';

import PlusIcon from '../../public/assets/icons/Plus.svg';
import MinusIcon from '../../public/assets/icons/Minus.svg';

export default function PartyNum() {
  const [matchingInfo, setMatchingInfo] = useRecoilState(matchingInfoState);

  const handleClickPlusButton = () => {
    if (matchingInfo.partyNum < 8) {
        setMatchingInfo((prev) => ({ ...prev, partyNum: prev.partyNum + 2 }));
    }
  }

  const handleClickMinusButton = () => {
    if (matchingInfo.partyNum > 2) {
        setMatchingInfo((prev) => ({ ...prev, partyNum: prev.partyNum - 2}));
    }
  }

  return (
    <StyledContainer>
      <StyledButton onClick={handleClickPlusButton}>
        <Image src={PlusIcon} alt="더하기 버튼" />
      </StyledButton>
      <PartyNumText>{matchingInfo.partyNum}</PartyNumText>
      <StyledButton onClick={handleClickMinusButton}>
        <Image src={MinusIcon} alt="빼기 버튼" />
      </StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 6.4rem;
  padding-top: 3.2rem;
`;

const StyledButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const PartyNumText = styled.p`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.blackColor};
`