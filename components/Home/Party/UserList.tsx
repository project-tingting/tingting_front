import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import UserLogo from '../../../public/assets/icons/user.svg';

export default function UserList() {
  return (
    <UserListContainer>
      <InfoContainer>
        <Image src={UserLogo} alt="유저 사진" />
        <UserName>User1</UserName>
      </InfoContainer>
    </UserListContainer>
  )
}

const UserListContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 0.4px solid #ADB3BC;
    padding: 12px 0;
`
const InfoContainer = styled.section`
    display: flex;
    gap: 12px;
`
const UserName = styled.p`
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.subTitleColor};
    line-height: 48px;
`