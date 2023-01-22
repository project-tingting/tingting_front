import React from 'react';
import styled from 'styled-components';

type Props = {
  stage: number;
  total: number;
};

interface IInnerScreen {
  width: string;
}

export default function ProgressBar({ stage, total }: Props) {
  return (
    <Container>
      <Progress width={(stage / total) * 100 + '%'} />
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
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  width: ${(props) => props.width};
  height: 100%;
`;
