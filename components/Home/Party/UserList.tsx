import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import UserLogo from '../../../public/assets/icons/user.svg';
import PaperPlaneIcon from '../../../public/assets/icons/paperPlane.svg';
import CheckIcon from '../../../public/assets/icons/check.svg';
import { PartyUserProps } from '../../../types/party';

export default function UserList({ userId }: PartyUserProps) {
  return (
    <UserListContainer>
      <UserProfile>
        <Image src={UserLogo} alt="유저 사진" />
        <UserName>{userId}</UserName>
      </UserProfile>
      <InviteButton>
        <Image src={PaperPlaneIcon} /> 초대
      </InviteButton>
    </UserListContainer>
  );
}

const UserListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.4px solid #adb3bc;
  padding: 12px 0;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
const UserName = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.subTitleColor};
  line-height: 48px;
`;

const InviteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 400;
  font-size: 18px;
  border-radius: 10px;
  padding: 0.8rem 0.95rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const InvitingButton = styled(InviteButton)`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  color: ${({ theme }) => theme.colors.mainColor};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
`;

const CompleteButton = styled(InviteButton)`
  background-color: #827397;
`;
