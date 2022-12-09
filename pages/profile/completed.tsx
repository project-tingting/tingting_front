import Router from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import InputContainer from '../../components/AnimationContainer';
import Notice from '../../components/Notice';
import { userprofileAPI } from '../../core/api/userprofileAPI';
import { userProfileState } from '../../core/recoil/userProfileAtom';

export default function completed() {
  const userProfile = useRecoilValue(userProfileState);
  useEffect(() => {
    console.log([...userProfile]);
    userprofileAPI([...userProfile]);
    setTimeout(() => {
      Router.push('/home/8294985024f44343bdbfe80bb6aea716'); // HOME으로 바꾸기
    }, 2000);
  }, []);
  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
