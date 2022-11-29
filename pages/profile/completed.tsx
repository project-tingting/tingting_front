import Router from 'next/router';
import React, { useEffect } from 'react';
import InputContainer from '../../components/AnimationContainer';
import Notice from '../../components/Notice';

export default function completed() {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/');
    }, 2000);
  }, []);
  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
