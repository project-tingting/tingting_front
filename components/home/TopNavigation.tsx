import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Symbol from '../../public/assets/icons/symbol.svg';
import Bell from '../../public/assets/icons/bell.svg';
import No_Chat from '../../public/assets/icons/no_chat.svg';

export default function TopNavigation() {
  return (
    <StyledContainer>
      <Image src={Symbol} alt="로고 버튼" />
      <Func>
        <Image src={Bell} alt="알림 버튼" />
        <Image src={No_Chat} alt="채팅 알림 버튼" />
      </Func>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  background: linear-gradient(180deg, #ffffff 50%, rgba(255, 255, 255, 0.5) 100%);
  height: 44px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const Func = styled.section`
  display: flex;
  gap: 16px;
`;
