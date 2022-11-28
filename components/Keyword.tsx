import React, { useState } from 'react';
import styled from 'styled-components';

interface KeywordButtonProps {
  text: string;
  isClicked: (clicked: boolean) => void;
}

export default function Keyword({ text, isClicked }: KeywordButtonProps) {
  const [onclick, setOnclick] = useState(false);

  const onClickKeyword = () => {
    setOnclick(!onclick);
    isClicked(onclick);
  };
  return (
    <StyledKeywordButton onClick={onClickKeyword} clicked={onclick} isClicked={isClicked}>
      {text}
    </StyledKeywordButton>
  );
}

const StyledKeywordButton = styled.button`
  font-size: 2rem;
  color: ${(props) =>
    props.clicked ? ({ theme }) => theme.colors.whiteColor : ({ theme }) => theme.colors.mainColor};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 3rem;
  padding: 1.2rem 1.6rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) =>
    props.clicked ? ({ theme }) => theme.colors.mainColor : ({ theme }) => theme.colors.bgColor};
`;
