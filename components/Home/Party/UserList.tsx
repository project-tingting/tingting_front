import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import UserLogo from '../../../public/assets/icons/user.svg';
import PaperPlaneIcon from '../../../public/assets/icons/paperPlane.svg';
import CheckIcon from '../../../public/assets/icons/check.svg';
import InvitingIcon from '../../../public/assets/icons/inviting.svg';
import { PartyUserProps } from '../../../types/party';
import { usePostInvitation } from './apiHooks/party';

export default function UserList({ userId, invitationState }: PartyUserProps) {
  const { mutate: InvitationMutate } = usePostInvitation();
  return (
    <UserListContainer>
      <UserProfile>
        <Image src={UserLogo} alt="유저 사진" />
        <UserName>{userId}</UserName>
      </UserProfile>
      {invitationState === '1' && (
        <InviteButton type="button" onClick={() => InvitationMutate({ userId })}>
          <Image src={PaperPlaneIcon} alt="초대 전송 아이콘" /> 초대
        </InviteButton>
      )}
      {invitationState === '-1' && (
        <InvitingButton type="button">
          <Image src={InvitingIcon} alt="초대 중 아이콘" />
          초대
        </InvitingButton>
      )}
      {invitationState === '9' && (
        <CompleteButton type="button">
          <Image src={CheckIcon} alt="초대 완료 아이콘" />
          완료
        </CompleteButton>
      )}
    </UserListContainer>
  );
}

const UserListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.4px solid #adb3bc;
  padding: 1.2rem 1.5rem;
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

const InviteButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
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
