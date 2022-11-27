import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { keyword, onKeywordSelector } from '../core/recoil/keyword';

interface KeywordButtonProps {
  text: string;
  // disabled: boolean;
  // onClick: () => void;
}

export default function Keyword({ text }: KeywordButtonProps) {
  const [onclick, setOnclick] = useState(false);

  // const [onclick, setOnclick] = useRecoilState(keyword);
  // const [count, setCount] = useState(0);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const onClickKeyword = () => {
  //   // useMemo(() => {
  //   setIsDisabled(!isDisabled);
  //   console.log(isDisabled);
  //   // }, [isDisabled]);
  // };
  // const onClickKeyword = useCallback(() => {
  //   // setIsDisabled(!isDisabled);
  //   isClicked;
  //   // console.log(isDisabled);
  // }, []);

  // const memo = useMemo(() => {
  //   setOnclick(!onclick);
  // }, [onclick]);
  // useEffect(() => {
  //   if (onclick === true) {
  //     setCount(count + 1);
  //     console.log(count);
  //   } else {
  //     setCount(count - 1);
  //     console.log(count);
  //   }
  // if(onclick>3) {
  //   console.log('3개이상임!')
  // }
  // }, [onclick]);
  // const onKeyword = () => {
  //   setIsDisabled(!isDisabled);
  // };

  const onClickKeyword = () => {
    setOnclick(!onclick);
    console.log(onclick);
    // disabled ? setOnClick(!onClick) : setOnClick(onClick);
  };
  return (
    // <StyledKeywordButton disabled={isDisabled} onClick={onClickKeyword} clicked={onclick}>
    <StyledKeywordButton onClick={onClickKeyword} clicked={onclick}>
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
