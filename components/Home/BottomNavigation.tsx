import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import ProfileIcon from '../../public/assets/icons/profile.svg';
import EditProfile from './EditModal/EditProfile';

export default function BottomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickLogoButton = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <>
      <StyledContainer>
        <LogoContainer>
          <Image src={ProfileIcon} alt="구름 로고" onClick={handleClickLogoButton} />
        </LogoContainer>
      </StyledContainer>
      {isOpen && <EditProfile onClick={setIsOpen}></EditProfile>}
    </>
  );
}

const StyledContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  height: 68px;
  position: fixed;
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
