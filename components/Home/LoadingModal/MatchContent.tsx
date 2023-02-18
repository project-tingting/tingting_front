import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useStartMatch } from '../../../core/apiHooks/matching';

import { StartButton } from '../HomeComponents';
import MatchGuideText from '../../../public/assets/icons/MatchGuide.svg';
import PlusIcon from '../../../public/assets/icons/Plus.svg';
import MinusIcon from '../../../public/assets/icons/Minus.svg';

export default function MatchContent() {
  const [partyNum, setPartyNum] = useState(1);
  const { mutate } = useStartMatch(partyNum);

  const handleClickMinusButton = () => {
    partyNum > 1 && setPartyNum((prev) => prev - 1);
  };

  const handleClickPlusButton = () => {
    partyNum < 4 && setPartyNum((prev) => prev + 1);
  };

  const handleClickStartButton = () => {
    mutate();
  };

  return (
    <>
      <ContentsContainer>
        <Image src={MatchGuideText} />
        <FuncContainer>
          <StyledButton onClick={handleClickMinusButton}>
            <Image src={MinusIcon} />
          </StyledButton>
          <PartyNumText>
            {partyNum} : {partyNum}
          </PartyNumText>
          <StyledButton onClick={handleClickPlusButton}>
            <Image src={PlusIcon} />
          </StyledButton>
        </FuncContainer>
      </ContentsContainer>
      <ButtonContainer>
        <StartButton onClick={handleClickStartButton}>팅팅</StartButton>
      </ButtonContainer>
    </>
  );
}

const ContentsContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const FuncContainer = styled.section`
  padding: 3.9rem 2.7rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PartyNumText = styled.p`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 1.5rem;
`;

const ButtonContainer = styled.section`
  position: fixed;
  bottom: 10rem;
  width: 100%;
  text-align: center;
`;
