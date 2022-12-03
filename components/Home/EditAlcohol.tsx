import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { OXButton, OXButtonGroup } from '../../pages/profile/alcohol';
import { Hr } from './EditMbti';

import purpleO from '../../public/assets/icons/purpleO.svg';
import purpleX from '../../public/assets/icons/purpleX.svg';
import whiteO from '../../public/assets/icons/whiteO.svg';
import whiteX from '../../public/assets/icons/whiteX.svg';
import { Container } from './EditMbti';
import SaveButton from './SaveButton';
import styled from 'styled-components';

export default function EditAlcohol() {
  const [alcohol, setAlcohol] = useState('');
  const [selected, setSelected] = useState(Boolean);

  useEffect(() => {
    alcohol;
  }, [alcohol]);

  const handleOButton = () => {
    setAlcohol('O');
    setSelected(true);
  };
  const handleXButton = () => {
    setAlcohol('X');
    setSelected(true);
  };
  return (
    <Container>
      <div>
        {selected && (
          <>
            <SelectedImg>
              {alcohol === 'O' ? <Image src={purpleO} /> : <Image src={purpleX} />}
            </SelectedImg>
            <Hr />
          </>
        )}

        <ButtonGroup>
          <OXButton onClick={handleOButton} className={alcohol === 'O' ? 'clicked' : ''}>
            <Image src={alcohol === 'O' ? whiteO : purpleO} />
          </OXButton>
          <OXButton onClick={handleXButton} className={alcohol === 'X' ? 'clicked' : ''}>
            <Image src={alcohol === 'X' ? whiteX : purpleX} />
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
