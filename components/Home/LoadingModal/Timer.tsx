import React from 'react';
import styled from 'styled-components';

type ProgressProps = {
  width: string;
};

export default function Timer() {
  return (
    <TimerContainer>
      <Progress />
    </TimerContainer>
  );
}

const TimerContainer = styled.section`
  background-color: rgba(77, 76, 125, 0.5);
  border-radius: 3rem;
  height: 0.8rem;
`;

const Progress = styled.section<ProgressProps>`
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: ${(props) => props.width};
  height: 100%;
`;
