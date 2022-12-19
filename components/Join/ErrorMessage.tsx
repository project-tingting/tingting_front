import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string;
}

export default function ErrorMessage({ text }: Props) {
  return (
    <StyledErrorMessage>
      {text}
    </StyledErrorMessage>
  )
}

const StyledErrorMessage = styled.p`
  font-size: 12px;
  line-height: 24px;
  color: #F75B77;
`