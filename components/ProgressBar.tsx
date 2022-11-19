import React from 'react';
import styled from 'styled-components';

type Props = {
  stage: number;
};

interface IInnerScreen {
  width: string;
}

export default function ProgressBar({ stage }: Props) {
  return (
    <Container>
      <Progress width={(stage / 4) * 100 + '%'} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 4px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
`;

const Progress = styled.section<IInnerScreen>`
  background-color: #5e5e5e;
  width: ${(props) => props.width};
  height: 100%;
`;
