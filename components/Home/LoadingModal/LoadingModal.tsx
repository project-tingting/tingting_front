import React from 'react';
import Router from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { useGetMatchingInfo } from '../../../core/apiHooks/matching';
import { useSetMatchAccept } from '../../../core/apiHooks/matching';
import { useGetRoomKeyInfo } from '../../../core/apiHooks/matching';

import X from '../../../public/assets/icons/X.svg';
import MatchContent from './MatchContent';
import LoadingComponent from '../../../public/assets/icons/Loading.svg';

type Props = {
  setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type ButtonProps = {
  accept: boolean;
};

export default function LoadingModal({ setIsLoadingModal }: Props) {
  const { data: roomKey } = useGetRoomKeyInfo();
  const { data } = useGetMatchingInfo(roomKey?.data.data.meetingRoomUser?.roomKey);
  const { mutate: setMatchAccept } = useSetMatchAccept();

  const handleClickCloseButton = () => {
    setIsLoadingModal((prev) => !prev);
  };

  const handleClickRejectButton = () => {
    setMatchAccept({ roomKey: roomKey?.data.data.meetingRoomUser?.roomKey, acceptNum: '-1' });
    setIsLoadingModal(false);
  };

  const handleClickAcceptButton = () => {
    setMatchAccept({ roomKey: roomKey?.data.data.meetingRoomUser?.roomKey, acceptNum: '20' });
    Router.push(`/chat/${roomKey?.data.data.meetingRoomUser?.roomKey}`);
  };

  return (
    <>
      <LoadingModalContainer>
        <CloseButton>
          <Image src={X} onClick={handleClickCloseButton} />
        </CloseButton>
        {roomKey?.data.data.meetingRoomUser?.roomKey ? (
          <ContentsContainer>
            {data?.data.data.manCount + data?.data.data.womanCount <
            Number(data?.data.data.type[0]) * 2 ? (
              <>
                <Image src={LoadingComponent} />
                <PeopleNum>
                  {data?.data.data.manCount + data?.data.data.womanCount} /{' '}
                  {Number(data?.data.data.type[0]) * 2}
                </PeopleNum>
              </>
            ) : (
              <>
                <GuideText>매칭상대를 찾았습니다!</GuideText>
                <ButtonContainer>
                  <DecisionButton accept={false} onClick={handleClickRejectButton}>
                    거절
                  </DecisionButton>
                  <DecisionButton accept={true} onClick={handleClickAcceptButton}>
                    수락
                  </DecisionButton>
                </ButtonContainer>
              </>
            )}
          </ContentsContainer>
        ) : (
          <MatchContent />
        )}
      </LoadingModalContainer>
    </>
  );
}

const LoadingModalContainer = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`;

const CloseButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 2rem;
  left: 1rem;
`;

const ContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const PeopleNum = styled.p`
  font-weight: 500;
  font-size: 4rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 6.5rem;
`;

const GuideText = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

const ButtonContainer = styled.section`
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1.6rem;
  width: 100%;
`;

const DecisionButton = styled.button<ButtonProps>`
  border-radius: 1.8rem;
  height: 6.4rem;
  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.whiteColor};
  width: 50%;
  display: block;
  background-color: ${(props) =>
    props.accept ? ({ theme }) => theme.colors.mainColor : '#827397'};
`;
