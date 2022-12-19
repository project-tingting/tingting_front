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
  const userAlcoholData = data.data.userProfileList[0].valueList[0];
  const setUserProfile = useSetRecoilState(userProfileState);
  const [alcohol, setAlcohol] = useState(userAlcoholData);
  const [selected, setSelected] = useState(Boolean);

  useEffect(() => {
    if (data?.success) {
      setSelected(true);
    }
    alcohol;
    setUserProfile((prev: ProfileType[]) => {
      const obj = prev;
      obj.map((item) => {
        item.topic === 'isDrink' ? [...item.valueList].splice(0, 1, alcohol) : null;
        return item;
      });
      console.log(obj);
      return obj;
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
              {alcohol === '1' ? <Image src={purpleO} /> : <Image src={purpleX} />}
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
