import React from 'react';
import styled from 'styled-components';
import { AlcoholProvider } from '../../components/EditProfile/context/AlcoholProvider';
import EditAlcohol from '../../components/EditProfile/EditAlcohol';
import EditMbti from '../../components/EditProfile/EditMbti';
import { SmokeProvider } from '../../components/EditProfile/context/SmokeProvide';
import EditSmoke from '../../components/EditProfile/EditSmoke';
import { useGetUserProfile } from '../../components/Profile/apiHooks/profile';
import EditInterest from '../../components/EditProfile/EditInterest';

export default function index() {
  // const { data } = useGetUserProfile();
  return (
    <EditProfileContainer>
      <Title>매칭 프로필</Title>
      <InfoContainer>
        <UserIcon />
        <UserId></UserId>
      </InfoContainer>
      <ProfileContainer>
        <EditMbti />
        <AlcoholProvider>
          <EditAlcohol />
        </AlcoholProvider>
        <SmokeProvider>
          <EditSmoke />
        </SmokeProvider>
        <EditInterest />
      </ProfileContainer>
    </EditProfileContainer>
  );
}

const EditProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: #4c4956;
  text-align: center;
  padding: 0.8rem;
`;

const InfoContainer = styled.div`
  padding: 1.2rem 1.6rem;
`;

const UserIcon = styled.div`
  width: 10rem;
  height: 10rem;
  background: url('/assets/icons/UserProfile.svg') no-repeat;
  background-size: contain;
`;

const UserId = styled.strong`
  font-weight: 600;
  font-size: 2rem;
  color: #201f21;
`;

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
