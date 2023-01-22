import React, { useEffect } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import useGetAccessToken from '../../util/hooks/useGetAccessToken';

import Notice from '../../components/common/Notice';

import FinishIcon from '../../public/assets/icons/finish.svg';

export default function completed() {
  const { mutate: getAccessToken } = useGetAccessToken();
  useEffect(() => {
    getAccessToken();
    setTimeout(() => {
      Router.push('/profile');
    }, 2000);
  }, []);
  return (
    <>
      <Notice message="팅팅에 가입되었어요!"></Notice>
      <ImageContainer>
        <Image src={FinishIcon} alt="완료 안내 아이콘" width={151} height={151} />
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.section`
  position: absolute;
  top: 31rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
