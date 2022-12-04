import React, { useState } from 'react';
import styled from 'styled-components';

interface KeywordButtonProps {
  text: string;
  onClicked: (clicked: boolean, text: string) => void;
  disabled?: boolean;
}

export const interestData = [
  '게임',
  '자기계발',
  '스포츠',
  '뷰티',
  '패션',
  '테크',
  '영화',
  '음악',
  '디자인',
  '음식',
  '예능',
  '음료',
  '여행',
  '시사',
];

export default function Keyword({ text, onClicked, disabled }: KeywordButtonProps) {
  const [onclick, setOnclick] = useState(false);

  const onClickKeyword = () => {
    setOnclick(!onclick);
    onClicked(onclick, text);
  };
  return (
    <StyledKeywordButton
      onClick={onClickKeyword}
      clicked={onclick}
      onclicked={onClicked}
      disabled={disabled}
    >
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
