import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  padding: 0 2em;
  display: flex;
  height: calc(100vh - 14.7rem);
  flex-direction: column;
`;
