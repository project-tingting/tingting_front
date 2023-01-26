import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import JoinPartyIcon from '../../public/assets/icons/joinParty.svg';

type GuideProps = {
  isClicked: boolean;
};

export default function HomeGuide() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyledContainer isClicked={isClicked}>
      <GuideContainer>
        <Image src={JoinPartyIcon} alt="파티 아이콘" />
        <PartyText>함께 할 파티원을 초대해보세요!</PartyText>
      </GuideContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.section<GuideProps>`
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 12px 24px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`;
const GuideContainer = styled.section`
  display: flex;
  gap: 8px;
`;

const PartyText = styled.p`
  font-size: 18px;
  line-height: 56px;
  color: ${({ theme }) => theme.colors.inputTextUserColor};
`;
