import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import mainPic from '../../public/assets/images/mainPic.svg';

export default function Banner() {
  return (
    <BannerContainer>
      <Image src={mainPic} alt="배너 사진" layout="fill" objectFit="cover" priority={true} />
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  position: relative;
  height: 40rem;
`;
