import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useGetMatchingInfo } from '../../../core/apiHooks/matching';

import X from '../../../public/assets/icons/X.svg';
import LoadingComponent from '../../../public/assets/icons/Loading.svg';

type Props = {
  setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoadingModal({ setIsLoadingModal }: Props) {
  const { data } = useGetMatchingInfo(localStorage.getItem('room-key'));

  const handleClickCloseButton = () => {
    setIsLoadingModal((prev) => !prev);
  }

  return (
  <>
  {
    !!localStorage.getItem('room-key') && (
      <LoadingModalContainer>
        <CloseButton>
          <Image src={X} onClick={handleClickCloseButton} />
        </CloseButton>
        <ContentsContainer>
        {
          data?.data.data.manCount + data?.data.data.womanCount < Number(data?.data.data.type[0]) * 2 ? (
            <>
              <Image src={LoadingComponent} />
              <PeopleNum>{data?.data.data.manCount + data?.data.data.womanCount} / {Number(data?.data.data.type[0]) * 2}</PeopleNum>
            </>
          ) : (
            <>
              <GuideText>매칭상대를 찾았습니다!</GuideText>
            </>
          )
        }
        </ContentsContainer>
      </LoadingModalContainer>
    )
  }
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
`

const ContentsContainer = styled.section`
  display : flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const PeopleNum = styled.p`
  font-weight: 500;
  font-size: 4rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 6.5rem;
`

const GuideText = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.whiteColor};
`

const DecisionButton = styled.button`
  
`