import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGetUserProfile } from '../Profile/apiHooks/profile';

interface KeywordButtonProps {
  text: string;
  onClicked: (clicked: boolean, text: string) => void;
  disabled?: boolean;
  clicked?: boolean;
}

type ButtonProps = {
  clicked: boolean;
};

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
  const { data } = useGetUserProfile();
  const userInterestData = data?.data?.userProfileList[2]?.valueList;

  useEffect(() => {
    userInterestData?.map((v: string) => {
      if (v === text) setOnclick(true);
    });
  }, []);

  const onClickKeyword = () => {
    setOnclick(!onclick);
    onClicked(onclick, text);
  };
  return (
    <StyledKeywordButton onClick={onClickKeyword} clicked={onclick} disabled={disabled}>
      {text}
    </StyledKeywordButton>
  );
}

const StyledKeywordButton = styled.button<ButtonProps>`
  font-size: 2rem;
  color: ${(props) =>
    props.clicked ? ({ theme }) => theme.colors.whiteColor : ({ theme }) => theme.colors.textColor};
  border: 0.1rem solid #adb3bc;
  border-radius: 3rem;
  padding: 1.2rem 1.6rem;
  margin-right: 0.8rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) =>
    props.clicked ? ({ theme }) => theme.colors.mainColor : ({ theme }) => theme.colors.bgColor};
`;
