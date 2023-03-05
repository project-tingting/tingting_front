import React from 'react';
import styled from 'styled-components';
import { ProfileProps } from '../../types/user';
import Keyword, { interestData } from '../common/Keyword';
import { useGetCodeList, useGetUserProfile } from '../Profile/apiHooks/profile';
import EditTitle from './common/EditTitle';

export default function EditInterest() {
  const { data: codeList } = useGetCodeList('interestKeyword');
  console.log(codeList);
  const { data: userProfile } = useGetUserProfile();
  console.log(userProfile);
  const interestKeywords = userProfile?.data?.userProfileList.filter((profile: ProfileProps) => {
    if (profile.topic === 'interestKeyword') return profile;
  });
  console.log(interestKeywords?.[0].valueList);
  const handleOnClicked = (onclick: boolean, text: string) => {
    // if (onclick) {
    //   setCount(count - 1);
    //   setKeywords(keywords.filter((keyword) => keyword !== text));
    // } else {
    //   setCount(count + 1);
    //   setKeywords([...keywords, text]);
    // }
  };
  return (
    <div>
      <EditTitle title="관심사" />
      <Keywords>
        {interestData.map((text) => (
          <Keyword key={text} text={text} onClicked={handleOnClicked} />
        ))}
      </Keywords>
    </div>
  );
}

const Keywords = styled.div`
  margin-top: 2rem;
`;
