import React from 'react';
import styled from 'styled-components';
import { AlcoholProvider } from '../../components/EditProfile/context/AlcoholProvider';
import EditAlcohol from '../../components/EditProfile/EditAlcohol';
import EditMbti from '../../components/EditProfile/EditMbti';
import { SmokeProvider } from '../../components/EditProfile/context/SmokeProvide';
import EditSmoke from '../../components/EditProfile/EditSmoke';

export default function index() {
  return (
    <EditProfileContainer>
      <h1>매칭 프로필</h1>
      <div></div>
      <EditMbti />
      <AlcoholProvider>
        <EditAlcohol />
      </AlcoholProvider>
      <SmokeProvider>
        <EditSmoke />
      </SmokeProvider>
    </EditProfileContainer>
  );
}

const EditProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
