import React from 'react';
import styled from 'styled-components';
import EditMbti from '../../components/EditProfile/EditMbti';

export default function index() {
  return (
    <EditProfileContainer>
      <h1>매칭 프로필</h1>
      <div></div>
      <EditMbti />
    </EditProfileContainer>
  );
}

const EditProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
