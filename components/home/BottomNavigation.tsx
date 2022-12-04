import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ProfileIcon from '../../public/assets/icons/profile.svg';

export default function BottomNavigation() {
  return (
    <StyledContainer>
      <LogoContainer>
        <Image src={ProfileIcon} alt="프로필 로고" />
      </LogoContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  height: 68px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  img {
    vertical-align: 20px;
  }
`;

const LogoContainer = styled.article`
  display: inline-block;
  margin-top: -20px;
`;
