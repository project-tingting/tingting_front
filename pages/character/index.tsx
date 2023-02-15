import React from 'react';
import Router from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

import Guide from '../../components/common/Guide';
import CharacterImg from '../../public/assets/icons/character.png';

export default function index() {
  return (
    <>
      <Guide text="캐릭터유형을 알아볼까요?" isCenter={true} />
      <ImageContainer>
        <Image src={CharacterImg} />
      </ImageContainer>
      <ButtonGroup>
        <StyledButton onClick={() => Router.back()}>나중에</StyledButton>
        <StyledButton onClick={() => Router.push('/character/test')}>네</StyledButton>
      </ButtonGroup>
    </>
  );
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2.4rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  cursor: 'pointer';
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 100%;
`;

const ButtonGroup = styled.div`
  max-width: 43rem;
  display: flex;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2.1rem 0;
  & button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.buttonDisabledColor};
  }
  & button {
    flex: 1 1 0;
  }
`;

const ImageContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
