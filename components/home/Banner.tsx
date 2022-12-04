import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import HomePic from '../../public/assets/images/homePic.png';

export default function Banner() {
  return (
    <BannerContainer>
      <Image src={HomePic} alt="배너 사진" layout="fill" objectFit="cover" />
      <BannerText>매칭을 시작해보세요!</BannerText>
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  position: relative;
  height: 300px;
`;

const BannerText = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 700;
  position: absolute;
  bottom: 36px;
  left: 25px;
`;
