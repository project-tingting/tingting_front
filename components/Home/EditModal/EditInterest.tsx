import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Keyword, { interestData } from '../../common/Keyword';
import SaveButton from './SaveButton';
import { Container } from './EditMbti';
import { SelectedKeyword, Hr } from './EditMbti';
import { useSetRecoilState } from 'recoil';
import { ProfileType, userProfileState } from '../../../core/recoil/userProfileAtom';
import { useGetUserProfile } from '../../Profile/apiHooks/profile';

export default function EditInterest() {
  const { data } = useGetUserProfile();
  const userInterestData = data?.data?.userProfileList[2]?.valueList || [];
  const setUserProfile = useSetRecoilState(userProfileState);
  const [count, setCount] = useState(0);
  const [keywords, setKeywords] = useState<string[]>(userInterestData);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (count > 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setUserProfile((prev: ProfileType[]) => {
      console.log(count);
      const setProfile: ProfileType = { topic: 'interestKeyword', valueList: keywords };
      const topicObject = data?.data?.userProfileList.find(
        (item: ProfileType) => item.topic === 'interestKeyword',
      );

      const filteredProfiles = prev.filter((item) => item.topic !== 'interestKeyword');

      const topic = { ...topicObject, valueList: [...keywords] };
      userInterestData.length === 0
        ? filteredProfiles.push(setProfile)
        : filteredProfiles.push(topic as ProfileType);
      console.log(topic.valueList);
      console.log(filteredProfiles);

      return filteredProfiles;
    });
  }, [keywords]);

  const handleOnClicked = (onclick: boolean, text: string) => {
    if (onclick) {
      setCount(count - 1);
      setKeywords(keywords.filter((keyword) => keyword !== text));
    } else {
      setCount(count + 1);
      setKeywords([...keywords, text]);
    }
  };
  return (
    <Container>
      <div>
        {keywords?.length !== 0 && (
          <>
            <SelectedKeywords>
              {keywords?.map((keyword) => (
                <SelectedKeyword key={keyword}>{keyword}</SelectedKeyword>
              ))}
            </SelectedKeywords>
            <Hr />
          </>
        )}
        <Keywords>
          {interestData.map((text) => (
            <Keyword key={text} text={text} onClicked={handleOnClicked} />
          ))}
        </Keywords>
      </div>
      <SaveButton disabled={disabled} />
    </Container>
  );
}

const SelectedKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Keywords = styled.div`
  margin-top: 2rem;
`;
