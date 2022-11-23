import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

export default function InputMessage({ text }: Props) {
  return <StyledMessage>{text}</StyledMessage>;
}

const StyledMessage = styled.p`
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-top: 0.75rem;
  padding: 0 0.75rem;
  color: #353535;
`;
