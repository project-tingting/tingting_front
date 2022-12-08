import React from 'react';
import styled from 'styled-components';

export default function LoadingModal() {
  return <LoadingModalContainer>LoadingModal</LoadingModalContainer>;
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
