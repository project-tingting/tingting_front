import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import SearchLogo from '../../../public/assets/icons/search.svg';
import UserList from './UserList';

export default function PartyModal() {
  return (
    <Container>
      <ModalContainer>
        <ModalTitle>초대목록</ModalTitle>
        <InputContainer>
          <Image src={SearchLogo} alt="돋보기 로고" />
          <ModalInput placeholder='검색어를 입력해주세요' />
        </InputContainer>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
      </ModalContainer>
    </Container>
  )
}

const Container = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
`
const ModalTitle = styled.h1`
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 20px;
`

const InputContainer = styled.section`
  position: relative;
  margin-bottom: 12px;
  img {
    position: absolute;
    left: 0;
  }
`


const ModalInput = styled.input`
    border-radius: 30px;
    padding: 9px 16px;
    background-color: #F5F4F9;
    color: #827397;
    font-size: 18px;
    line-height: 17px;
    border: none;
    outline: 0;
    width: 100%;
`