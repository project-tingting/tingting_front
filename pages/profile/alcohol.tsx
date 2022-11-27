import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileSection } from '.';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Top from '../../components/Top';
import { Wrap } from '../../components/Wrap';
import { LeftMainText } from './mbti';
import O from '../../public/assets/icons/purpleO.svg';
import X from '../../public/assets/icons/purpleX.svg';

export default function alcohol() {
  const [clicked, setClicked] = useState(false);
  const handleContinueButton = () => {
    console.log('완료~!');
    // Router.push('/profile/interest');
  };
  const handleOXButton = () => {
    console.log('O');
    setClicked(true);
  };
  return (
    <ProfileSection>
      <div>
        <Top text="프로필" />
        <ProgressBar stage={3} total={3} />
        <Wrap>
          <LeftMainText>술을 선호하시나요?</LeftMainText>
          <OXButtonGroup>
            <OXButton onClick={handleOXButton} clicked={clicked}>
              <Image src={O} />
            </OXButton>
            <OXButton clicked={clicked}>
              <Image src={X} />
            </OXButton>
          </OXButtonGroup>
        </Wrap>
      </div>
      <Wrap>
        <Button onClick={handleContinueButton} text="계속하기" disabled={false} isRound={true} />
      </Wrap>
    </ProfileSection>
  );
}

const OXButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.6rem;
`;
const OXButton = styled.button`
  padding: 6.6rem;
  border-radius: 2.4rem;
  /* color: ${({ theme }) => theme.colors.mainColor}; */
  background-color: ${(props) =>
    props.clicked ? ({ theme }) => theme.colors.mainColor : ({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    position: relative;
    top: 0.2rem;
  }
  /* &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
  } */
`;
