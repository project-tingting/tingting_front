import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { OXButton, OXButtonGroup } from '../../../pages/profile/alcohol';
import { Hr } from './EditMbti';

import purpleO from '../../../public/assets/icons/purpleO.svg';
import purpleX from '../../../public/assets/icons/purpleX.svg';
import whiteO from '../../../public/assets/icons/whiteO.svg';
import whiteX from '../../../public/assets/icons/whiteX.svg';
import { Container } from './EditMbti';
import SaveButton from './SaveButton';
import styled from 'styled-components';
import { useGetUserProfile } from '../../../util/hooks/useGetUserProfile';
import { useSetRecoilState } from 'recoil';
import { ProfileType, userProfileState } from '../../../core/recoil/userProfileAtom';

export default function EditAlcohol() {
  const { data } = useGetUserProfile();
  const userAlcoholData = data?.data?.userProfileList.find((item: any) => item.topic === 'isDrink')
    ?.valueList[0];
  const setUserProfile = useSetRecoilState(userProfileState);
  const [alcohol, setAlcohol] = useState(userAlcoholData);
  const [selected, setSelected] = useState(Boolean);

  useEffect(() => {
    console.log(alcohol);
  }, [alcohol]);

  useEffect(() => {
    setUserProfile((prev: ProfileType[]) => {
      const setProfile: ProfileType = { topic: 'isDrink', valueList: [alcohol] };
      const topicObject = data?.data?.userProfileList.find(
        (item: ProfileType) => item.topic === 'isDrink',
      );
      const filteredProfiles = prev.filter((item) => item.topic !== 'isDrink');

      const valueList = topicObject?.valueList.map((item: ProfileType, index: number) => {
        if (index === 0) return alcohol;
        return item;
      });
      const topic = { ...topicObject, valueList };
      topic.valueList === undefined
        ? filteredProfiles.push(setProfile)
        : filteredProfiles.push(topic as ProfileType);

      return filteredProfiles;
    });
  }, [alcohol]);

  const handleOButton = () => {
    setAlcohol('1');
    setSelected(true);
  };
  const handleXButton = () => {
    setAlcohol('0');
    setSelected(true);
  };
  return (
    <Container>
      <div>
        {selected && (
          <>
            <SelectedImg>
              {alcohol === '1' ? <Image src={purpleO} /> : null}
              {alcohol === '0' ? <Image src={purpleX} /> : null}
            </SelectedImg>
            <Hr />
          </>
        )}

        <ButtonGroup>
          <OXButton onClick={handleOButton} className={alcohol === '1' ? 'clicked' : ''}>
            <Image src={alcohol === '1' ? whiteO : purpleO} />
          </OXButton>
          <OXButton onClick={handleXButton} className={alcohol === '0' ? 'clicked' : ''}>
            <Image src={alcohol === '0' ? whiteX : purpleX} />
          </OXButton>
        </ButtonGroup>
      </div>
      <SaveButton />
    </Container>
  );
}

const SelectedImg = styled.div`
  text-align: center;
  margin-top: 2.8rem;
`;

const ButtonGroup = styled(OXButtonGroup)`
  margin-top: 1.6rem;
`;
