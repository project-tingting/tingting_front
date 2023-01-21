import Router from 'next/router';
import React, { useEffect } from 'react';
import InputContainer from '../../components/AnimationContainer';
import { Wrap } from '../../components/common/Wrap';
import Notice from '../../components/Notice';
import { usePostProfile } from '../../util/hooks/usePostProfile';

export default function completed() {
  const { mutate } = usePostProfile({
    onError: () => {
      console.log('error');
    },
    onSuccess: (data) => {
      setTimeout(() => {
        Router.push('/login');
      }, 2000);
    },
  });

  useEffect(() => {
    mutate({});
  }, []);

  return (
    <Wrap>
      <InputContainer>
        <Notice message="프로필 설정이 완료되었습니다!"></Notice>
      </InputContainer>
    </Wrap>
  );
}
