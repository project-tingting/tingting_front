import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import close from '../../public/assets/icons/Close.svg';

export default function CloseButton() {
  return (
    <StyledCloseButton>
      <Image src={close} />
    </StyledCloseButton>
  );
}

const StyledCloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 50%;
  padding: 1.2rem;
  margin-top: 3.4rem;
`;
