import React from 'react';
import styled from 'styled-components';

interface keywordProps {
  text: string;
  onclick: () => void;
}

export default function MbtiKeyword({ text, onclick }: keywordProps) {
  return (
    <>
      <StyledInput type="radio" value={text} id={text} name="userMbti" />
      <StyledLabel htmlFor={text} onClick={onclick}>
        {text}
      </StyledLabel>
    </>
  );
}

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 3rem;
  padding: 1.2rem 1.6rem;
  margin-top: 1.2rem;
  margin-right: 0.8rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  cursor: pointer;

  ${StyledInput}:checked + && {
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;
