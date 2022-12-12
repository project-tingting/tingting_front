import React, { useState } from 'react';
import styled from 'styled-components';
import MbtiKeyword from '../MbtiKeyword';
import SaveButton from './SaveButton';

export default function EditMbti() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState(Boolean);

  const MBTI = [
    'ENFP',
    'ENTP',
    'INTP',
    'ESTJ',
    'ESFP',
    'INFJ',
    'ISTJ',
    'ESTP',
    'ENTJ',
    'INFP',
    'ISFJ',
    'INTJ',
  ];

  const isSelected = (mbti: string) => {
    setText(mbti);
    setSelected(true);
    console.log(mbti);
  };

  return (
    <Container>
      <div>
        {selected && (
          <>
            <SelectedKeyword>{text}</SelectedKeyword>
            <Hr />
          </>
        )}
        <MbtiKeywords>
          {MBTI.map((mbti) => (
            <MbtiKeyword key={mbti} text={mbti} onclick={() => isSelected(mbti)} />
          ))}
        </MbtiKeywords>
      </div>
      <SaveButton />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8rem;
`;

export const Hr = styled.hr`
  border: 0.1rem solid rgba(130, 115, 151, 0.5);
  margin-top: 2rem;
`;

export const SelectedKeyword = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 3rem;
  padding: 1.2rem 1.6rem;
  margin-top: 2rem;
`;

const MbtiKeywords = styled.div`
  margin-top: 2rem;
`;
