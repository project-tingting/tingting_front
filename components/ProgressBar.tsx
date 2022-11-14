import React, { useState } from 'react';
import styled from 'styled-components';

interface IInnerScreen {
  width: string;
}

export default function ProgressBar() {
  const [count, setCount] = useState(1);
  const onClick =() => {
    setCount(prev => prev + 1);
  }
  return (
    <Container onClick={onClick}>
        <Progress width={(count / 4) * 100 + '%'} />
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: 4px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
`

const Progress = styled.section<IInnerScreen>`
    background-color: #5E5E5E;
    width: ${props => props.width};
    height: 100%;
    transition: width 1s;
`