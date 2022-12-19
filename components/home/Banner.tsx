import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import HomePic from '../../public/assets/images/NewHomePic.png';

export default function Banner() {
  return (
    <BannerContainer>
      <Image src={HomePic} alt="배너 사진" layout="fill" objectFit="cover" priority={true} />
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  position: relative;
  height: 40rem;
`;
