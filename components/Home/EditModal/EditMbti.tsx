import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProfileType, userProfileState } from '../../../core/recoil/userProfileAtom';
import { useGetUserProfile } from '../../Profile/apiHooks/profile';
import MbtiKeyword from '../MbtiKeyword';
import SaveButton from './SaveButton';

export default function EditMbti() {
  const { data } = useGetUserProfile();
  const setUserProfile = useSetRecoilState(userProfileState);
  const [text, setText] = useState<string | undefined>(undefined);
  console.log(text);

  const mbtiDisplayText = data?.data?.userProfileList?.find(
    (item: ProfileType) => item.topic === 'mbti',
  )?.valueList[0];
  const selected = text || mbtiDisplayText;

  console.log('mbtiDisaply', mbtiDisplayText);

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

    setUserProfile((prev: ProfileType[]) => {
      const setProfile: ProfileType = { topic: 'mbti', valueList: [text || ''] };
      const topicObject = data?.data?.userProfileList.find(
        (item: ProfileType) => item.topic === 'mbti',
      );
      const filteredProfiles = prev.filter((item) => item.topic !== 'mbti');

      const valueList = topicObject?.valueList.map((item: ProfileType, index: number) => {
        if (index === 0) return mbti;
        return item;
      });
      const topic = { ...topicObject, valueList };
      console.log(topic.valueList);
      topic.valueList === undefined
        ? filteredProfiles.push(setProfile)
        : filteredProfiles.push(topic as ProfileType);

      return filteredProfiles;
    });
  };

  return (
    <Container>
      <div>
        {selected && (
          <>
            <SelectedKeyword>{text || mbtiDisplayText}</SelectedKeyword>
            <Hr />
          </>
        )}
        <MbtiKeywords>
          {MBTI.map((mbti) => (
            <MbtiKeyword
              key={mbti}
              text={mbti}
              onclick={() => isSelected(mbti)}
              mbti={text || mbtiDisplayText}
            />
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
