import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import SearchLogo from '../../../public/assets/icons/search.svg';
import UserList from './UserList';
import { useGetUsers } from './apiHooks/party';
import { PartyUserProps } from '../../../types/party';

type PartyModalProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PartyModal({ setIsOpenModal }: PartyModalProps) {
  const { data: toInviteUsers } = useGetUsers();
  const [searchText, setSearchText] = useState('');

  const handleClickCancelButton = () => {
    setIsOpenModal(false);
  };

  toInviteUsers?.data.sort((a: PartyUserProps, b: PartyUserProps) => {
    const userA = a.userId;
    const userB = b.userId;
    if (userA < userB) return -1;
    if (userA > userB) return 1;
    return 0;
  });
  const filteredUser = toInviteUsers?.data.filter((user: PartyUserProps) => {
    return user.userId.includes(searchText);
  });
  return (
    <Container>
      <ModalContainer>
        <ModalTitle>초대목록</ModalTitle>
        <InputContainer>
          <Image src={SearchLogo} alt="돋보기 로고" />
          <ModalInput
            placeholder="검색어를 입력해주세요"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputContainer>
        <ListContainer>
          {filteredUser?.map((user: PartyUserProps) => (
            <UserList
              key={user.userId}
              userId={user.userId}
              invitationState={user.invitationState}
            />
          ))}
        </ListContainer>
        <CancelButton onClick={handleClickCancelButton}>취소</CancelButton>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.article`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin: 0 16px;
  padding: 24px 16px;
  width: 100%;
  text-align: center;
  max-width: 43rem;
  height: 70%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.section`
  position: relative;
  margin-bottom: 12px;
  img {
    position: absolute;
    left: 0;
  }
`;

const ModalInput = styled.input`
  border-radius: 30px;
  padding: 9px 16px;
  background-color: #f5f4f9;
  font-size: 18px;
  line-height: 17px;
  border: none;
  outline: 0;
  width: 100%;
`;

const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  display: block;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  overflow: scroll;
  flex-grow: 1;
`;
