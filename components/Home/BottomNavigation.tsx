import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { FixedBottomLayout } from '../Layout/FixedLayout';
import SpotLogo from '../../public/assets/icons/bottom_spot.svg';
import HomeLogo from '../../public/assets/icons/bottom_home.svg';
import MyPageLogo from '../../public/assets/icons/bottom_myPage.svg';

export default function BottomNavigation() {
  return (
    <StyledContainer>
      <FixedBottomLayout>
        <Image src={SpotLogo} alt="추천스팟 버튼" />
        <Image src={HomeLogo} alt="홈 버튼" />
        <Image src={MyPageLogo} alt="마이페이지 버튼" />
      </FixedBottomLayout>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 -0.4rem 0.6rem rgba(0, 0, 0, 0.04);

  height: 8.1rem;
  text-align: center;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
