import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProfileType, userProfileState } from '../../../core/recoil/userProfileAtom';
import { useGetUserProfile } from '../../../util/hooks/useGetUserProfile';
import MbtiKeyword from '../MbtiKeyword';
import SaveButton from './SaveButton';

export default function EditMbti() {
  const { data } = useGetUserProfile();
  // const mbtiData = data.data.userProfileList[1].valueList;
  const value = useRecoilValue(userProfileState);
  const setUserProfile = useSetRecoilState(userProfileState);
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

  // useEffect(() => {
  //   if (mbtiData === '') {
  //     setSelected(false);
  //   } else {
  //     setSelected(true);
  //   }
  // }, [mbtiData]);
  // console.log(data.data.userProfileList[1].valueList);
  // console.log(userMbtiData);
  useEffect(() => {
    if (data?.success) {
      setSelected(true);
      setText(data.data.userProfileList[1].valueList);
      // isSelected(text);
    }
    // console.log('data', data.data);
    console.log(userProfileState);
    // setUserProfile((prev: ProfileType[]) => {
    //   const obj1 = JSON.stringify(prev);
    //   const obj = JSON.parse(obj1);
    //   const obj2 = prev;

    //   console.log(obj2);
    //   // console.log(obj[0], 'obj');
    //   // console.log(obj[0].valueList[0], 'valueList');
    //   // obj[0].valueList[0] = text;
    //   // obj[0].topic === 'mbti' ? (obj[0].valueList[0] = value) : null;
    //   console.log('obj', obj);
    //   return obj;
    // });
  }, [data, selected]);
  console.log('value', value);

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
      <SaveButton value={text} />
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
