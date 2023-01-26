import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import PartyModal from './PartyModal';

import HostIcon from '../../../public/assets/icons/host.svg';
import AddLogo from '../../../public/assets/icons/add.svg';

export default function PartyMember() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickPlusButton = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <PartyContainer>
        <Image src={HostIcon} alt="방장 로고" />
        <AddButton onClick={handleClickPlusButton}>
          <Image src={AddLogo} alt="추가 로고" />
        </AddButton>
      </PartyContainer>

      {isOpenModal && <PartyModal setIsOpenModal={setIsOpenModal} />}
    </>
  );
}

const PartyContainer = styled.article`
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AddButton = styled.button`
  background: #d1c4f6;
  border-radius: 50%;
  padding: 1.2rem;
  width: 8rem;
  height: 8rem;
`;
