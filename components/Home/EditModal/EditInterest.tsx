import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Keyword, { interestData } from '../../Keyword';
import SaveButton from './SaveButton';
import { Container } from './EditMbti';
import { SelectedKeyword, Hr } from './EditMbti';
import { useGetUserProfile } from '../../../util/hooks/useGetUserProfile';
import { useSetRecoilState } from 'recoil';
import { ProfileType, userProfileState } from '../../../core/recoil/userProfileAtom';

export default function EditInterest() {
  const { data } = useGetUserProfile();
  const userInterestData = data.data.userProfileList[2].valueList;
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
      const obj = prev;
      obj.map((item) => {
        item.topic === 'interestKeyword' ? (item.valueList = keywords) : null;
        return item;
      });
      console.log(obj);
      return obj;
    });
  });

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
        {keywords.length !== 0 && (
          <>
            <SelectedKeywords>
              {keywords.map((keyword) => (
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
