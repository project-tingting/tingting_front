import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import InputContainer from '../../components/common/AnimationContainer';
import Notice from '../../components/common/Notice';
import CompleteIcon from '../../public/assets/icons/finish.svg';

export default function completed() {
  return (
    <>
      <InputContainer>
        <Notice message="팅팅 프로필이 생겼어요!">
          <ImageContainer>
            <Image src={CompleteIcon} />
          </ImageContainer>
        </Notice>
      </InputContainer>
    </>
  );
}

const ImageContainer = styled.div`
  margin: 14.6rem 2.2rem;
  text-align: center;
`;
