import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import warning from '../../../public/assets/icons/WarningCircle.svg';

export default function ChatModal() {
  return (
    <Background>
      <Modal>
        <Image src={warning} />
        <NoticeContainer>
          <NoticeText>나가기 전까지 새로운 팀과</NoticeText>
          <NoticeText>매칭을 이용할 수 없습니다</NoticeText>
        </NoticeContainer>
        <ButtonGroup>
          <ExitButton>나가기</ExitButton>
          <ContinueButton>계속</ContinueButton>
        </ButtonGroup>
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.article`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  text-align: center;
  padding: 3.5rem 1.6rem 2.1rem;
  width: 396px;
`;

const NoticeContainer = styled.div`
  margin: 2rem 0 2.6rem;
`;

const NoticeText = styled.p`
  color: #353535;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExitButton = styled.button`
  color: ${({ theme }) => theme.colors.mainColor};
  background: #ffffff;
  border: 1px solid #764af1;
  border-radius: 30px;
  padding: 12px 16px;
  font-size: 2rem;
`;
const ContinueButton = styled.button`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: #764af1;
  border-radius: 30px;
  padding: 12px 16px;
  font-size: 2rem;
`;
