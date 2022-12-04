import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import PartyIcon from '../../public/assets/icons/party.svg';
import DownArrowIcon from '../../public/assets/icons/arrow_down.svg';
import HostIcon from '../../public/assets/icons/host.svg';

type IInnerScreen = {
  isClicked: boolean;
};

export default function Party() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClickArrowButton = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Container>
      <StyledContainer isClicked={isClicked}>
        <GuideContainer>
          <Image src={PartyIcon} alt="파티 아이콘" />
          <PartyText>함께 할 파티원을 초대해보세요!</PartyText>
        </GuideContainer>
        <Image src={DownArrowIcon} alt="펼치기 버튼" onClick={handleClickArrowButton} />
      </StyledContainer>
      {isClicked && (
        <PartyContainer>
          <Image src={HostIcon} alt="방장 로고" />
        </PartyContainer>
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const StyledContainer = styled.section<IInnerScreen>`
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

const PartyContainer = styled.article`
  border-top: 0.4px solid #adb3bc;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: 12px 24px;
  position: absolute;
  width: 100%;
`;