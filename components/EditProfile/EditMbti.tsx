import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileType } from '../../core/recoil/userProfileAtom';
import { useGetUserProfile, usePutUserProfile } from '../Profile/apiHooks/profile';

import editPencil from '../../public/assets/icons/editPencil.svg';
import EditTitle from './common/EditTitle';

export default function EditMbti() {
  const { data: userProfile } = useGetUserProfile();
  console.log(userProfile);

  const mbtiDisplayText = userProfile?.data?.userProfileList?.find(
    (item: ProfileType) => item.topic === 'mbti',
  )?.valueList[0];

  const { mutate: EditUserProfileMutate } = usePutUserProfile();
  const [userMbti, setUserMbti] = useState(mbtiDisplayText);

  return (
    <EditMbtiContainer>
      <EditTitle title="MBTI" />
      <Contents>
        <MbtiInput
          type="text"
          defaultValue={mbtiDisplayText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserMbti(e.target.value)}
        />
        <EditButton
          onClick={() => EditUserProfileMutate([{ topic: 'mbti', valueList: [userMbti] }])}
        >
          <Image src={editPencil} />
        </EditButton>
      </Contents>
    </EditMbtiContainer>
  );
}

const EditMbtiContainer = styled.div``;

const Contents = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
`;

const MbtiInput = styled.input`
  padding: 1.2rem;
  border: 0.1rem solid #adb3bc;
  border-radius: 1rem;
  font-size: 2rem;
  width: 100%;
`;

const EditButton = styled.button`
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 1rem;
`;
